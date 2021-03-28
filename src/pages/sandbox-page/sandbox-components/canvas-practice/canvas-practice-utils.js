import React, { useState, useRef } from "react";

export const CreateHearts = () => {
  const [coordinates, setCoordinates] = useState([]);

  const canvasRef = useRef(null);
  const canvas = canvasRef.current;
  const context = canvas.getContext("2d");

  const draw = (context, location) => {
    context.fillStyle = "red";
    context.shadowColor = "red";
    context.shadowBlur = 15;
    context.save();
    context.scale(SCALE, SCALE);
    context.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
    context.rotate((225 * Math.PI) / 180);
    context.fill(SVG_PATH);
    context.restore();
  };

  const heartSVG =
    "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z";
  const SVG_PATH = new Path2D(heartSVG);

  const handleCanvasClicks = (event) => {
    const currentCoord = { x: event.clientX, y: event.clientY };
    setCoordinates([...coordinates, currentCoord]);
  };

  const useCanvas = () => {
    const canvasRef = useRef(null);
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    coordinates.forEach((coordinate) => {
      draw(context, coordinate);
    });
    return [coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight];
  };

  const handleCanvasClick = (event) => {
    const currentCoord = { x: event.clientX, y: event.clentY };
    setCoordinates([...coordinates, currentCoord]);
  };
};

export const drawFunction = () => {
  // When true, moving the mouse draws on the canvas
  let isDrawing = false;
  let x = 0;
  let y = 0;

  const myPics = document.getElementById("myPics");
  const context = myPics.getContext("2d");

  // event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

  // Add the event listeners for mousedown, mousemove, and mouseup
  myPics.addEventListener("mousedown", (e) => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
  });

  myPics.addEventListener("mousemove", (e) => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
    }
  });

  window.addEventListener("mouseup", (e) => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.offsetX, e.offsetY);
      x = 0;
      y = 0;
      isDrawing = false;
    }
  });

  function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  }
};
