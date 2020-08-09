// ROTATION GRID
const [counter, setCounter] = useState(0);

const onDrop = () => {
  updateRotations({
    rotationID,
    type: "insert",
    insert: {
      insertAt: "index",
      index: dragSettings.hoverIndex,
      action: stateOfRotations.dragAction,
    },
  });
};

const onDragOver = (e) => {
  e.preventDefault();

  setCounter(counter + 1);
  if (counter % 50 === 0) {
    const mousePos =
      e.pageX -
      e.target.offsetLeft -
      marginLeft +
      timelineRef.current.scrollLeft;
    if (mousePos > dragSettings.listOfPixelPos[dragSettings.hoverIndex]) {
      updateRotations({
        rotationID,
        type: "insert",
        insert: {
          insertAt: "index",
          index: dragSettings.hoverIndex + 1,
          opacity: 0.5,
          action: stateOfRotations.dragAction,
        },
      });
      setDragSettings({
        rotationID,
        listOfPixelPos: [...dragSettings.listOfPixelPos],
        hoverIndex: dragSettings.hoverIndex + 1,
      });
    }
    if (mousePos < dragSettings.listOfPixelPos[dragSettings.hoverIndex - 1]) {
      updateRotations({
        rotationID,
        type: "insert",
        insert: {
          insertAt: "index",
          index: dragSettings.hoverIndex - 1,
          opacity: 0.5,
          action: stateOfRotations.dragAction,
        },
      });
      setDragSettings({
        rotationID,
        listOfPixelPos: [...dragSettings.listOfPixelPos],
        hoverIndex: dragSettings.hoverIndex - 1,
      });
    }
  }
};

const onDragEnter = (e) => {
    let listOfPixelPos = [];
    for (const action of stateOfRotations.rotationsCopyBeforeDrag[rotationID]) {
      listOfPixelPos.push(action.timePos * stateOfRotations.secondToPixel);
    }
    for (const [index, pixelPos] of listOfPixelPos.entries()) {
      if (
        e.pageX -
          e.target.offsetLeft -
          marginLeft +
          timelineRef.current.scrollLeft <
        pixelPos
      ) {
        setDragSettings({ rotationID, listOfPixelPos, hoverIndex: index });
        updateRotations({
          rotationID,
          type: "insert",
          insert: {
            insertAt: "index",
            index,
            opacity: 0.5,
            action: stateOfRotations.dragAction,
          },
        });
        break;
      }
      setDragSettings({ rotationID, listOfPixelPos, hoverIndex: "end" });
      updateRotations({
        rotationID,
        type: "insert",
        insert: {
          insertAt: "index",
          index: "end",
          opacity: 0.5,
          action: stateOfRotations.dragAction,
        },
      });
    }
};

const onDragLeave = (e) => {
    updateRotations({
      rotationID,
      type: "insert",
      insert: { insertAt: "nowhere" },
    });
};

// UPDATE ROTATIONS REDUCER

case "setDragging":
  if (typeof updates.setDragging.dragging !== "undefined") {
    newStateOfRotations["dragging"] = updates.setDragging.dragging;
    newStateOfRotations["rotationsCopyBeforeDrag"] = newRotations;
  }
  if (updates.setDragging.dragAction) {
    newStateOfRotations["dragAction"] = updates.setDragging.dragAction;
  }
  return newStateOfRotations;

// case insert:
case "nowhere":
  newRotations[id] = setRotationWithTimeline([...rotation]);
  newStateOfRotations["rotations"] = newRotations;
  break;


// SELECT ACTION

const onDragStart = () => {
  updateRotations({
    type: "setDragging",
    setDragging: {
      dragging: true,
      dragAction: action,
    },
  });
};

const onDragEnd = () => {
  updateRotations({ type: "setDragging", setDragging: { dragging: false } });
};

// TIMELINE
const [dragSettings, setDragSettings] = useState({
  rotationID: 0,
  listOfPixelPos: [],
  hoverIndex: 0,
});
const timelineRef = useRef(null);