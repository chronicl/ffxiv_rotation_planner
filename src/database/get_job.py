from lxml import html
import requests
import re


def get_ability_info(ability):
    action_info = {
        "name": ability.xpath('.//*[@class="skill__wrapper"]/p/strong/text()')[
            0
        ],
        "lvl": ability.xpath('.//*[@class="jobclass__wrapper"]/p/text()')[0],
        "skill_type": ability.xpath('.//*[@class="classification"]/text()')[0],
        "cast": ability.xpath('.//*[@class="cast"]/text()')[0],
        "recast": ability.xpath('.//*[@class="recast"]/text()')[0],
        "cost": ability.xpath('.//*[@class="cost"]/text()')[0],
        "skill_range": ability.xpath('.//*[@class="distant_range"]/text()')[1],
        "aoe_range": ability.xpath('.//*[@class="distant_range"]/text()')[
            3
        ].strip(),
        "effect": "\n".join(
            [
                desc.strip()
                for desc in ability.xpath('.//*[@class="content"]/text()')
            ]
        ),
        "img_link": ability.xpath('.//*[@class="job__skill_icon"]/img/@src')[0],
    }
    re_duration = re.compile("^Duration:\\s(\\d+)s")
    duration = re_duration.match(action_info["effect"])
    if duration:
        action_info.update(numDuration=duration.group(1))
    else:
        action_info.update(numDuration=0)

    def toFloat(ele):
        try:
            return float(ele)
        except ValueError:
            return float(0)

    action_info.update(
        numRecast=toFloat(action_info["recast"][:-1]),
        numCast=toFloat(action_info["cast"][:-1]),
        isGCD=not (action_info["skill_type"] == "Ability"),
    )
    return action_info


job_and_abbreviation = {
    "paladin": "pld",
    "warrior": "war",
    "darkknight": "drk",
    "gunbreaker": "gnb",
    "monk": "mnk",
    "dragoon": "drg",
    "ninja": "nin",
    "samurai": "sam",
    "bard": "brd",
    "machinist": "mch",
    "dancer": "dnc",
    "blackmage": "blm",
    "summoner": "smn",
    "redmage": "rdm",
    "whitemage": "whm",
    "scholar": "sch",
    "astrologian": "ast",
}

# GET JOB ACTION INFO
# for job, job_abbreviation in job_and_abbreviation.items():
#     response = requests.get(f"https://na.finalfantasyxiv.com/jobguide/{job}/")
#     tree = html.fromstring(response.content)
#     abilities = tree.xpath('//tr[contains(@id, "pve_action")]')

#     with open(job_abbreviation + ".js", "w") as file:
#         file.write("export default [")
#         for ability in abilities:
#             file.write("{\n")
#             for key, value in get_ability_info(ability).items():
#                 if isinstance(value, str):
#                     file.write(f"{key}: `{value}`,\n")
#                 elif isinstance(value, bool):
#                     if value:
#                         file.write(f"{key}: true,\n")
#                     else:
#                         file.write(f"{key}: false,\n")
#                 elif isinstance(value, (int, float)):
#                     file.write(f"{key}: {value},\n")

#             file.write("},\n")
#         file.write("]")

# GET ROLE ACTION INFO
role_and_job = {
    "tank": "darkknight",
    "healer": "whitemage",
    "melee": "monk",
    "prange": "bard",
    "mrange": "blackmage",
}

for role, job in role_and_job.items():
    response = requests.get(f"https://na.finalfantasyxiv.com/jobguide/{job}/")
    tree = html.fromstring(response.content)
    abilities = tree.xpath(f'//tr[contains(@id, "{role}_action")]')

    with open(role + ".js", "w") as file:
        file.write("export default [")
        for ability in abilities:
            file.write("{\n")
            for key, value in get_ability_info(ability).items():
                if isinstance(value, str):
                    file.write(f"{key}: `{value}`,\n")
                elif isinstance(value, bool):
                    if value:
                        file.write(f"{key}: true,\n")
                    else:
                        file.write(f"{key}: false,\n")
                elif isinstance(value, (int, float)):
                    file.write(f"{key}: {value},\n")

            file.write("},\n")
        file.write("]")
