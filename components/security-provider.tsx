"use client";

import { useEffect } from "react";

export function SecurityProvider() {
  useEffect(() => {
    // 1. Disable Right Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Disable Image Dragging
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault();
      }
    };

    // 3. Disable Keyboard Shortcuts (Save, View Source, Inspect)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.code === "F12" ||
        (e.ctrlKey && e.shiftKey && e.code === "KeyI") || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.code === "KeyJ") || // Ctrl+Shift+J
        (e.ctrlKey && e.code === "KeyU") || // Ctrl+U
        (e.ctrlKey && e.code === "KeyS") // Ctrl+S
      ) {
        e.preventDefault();
      }
    };

    // Use Capture Phase to intercept events before they reach targets
    // document.addEventListener("contextmenu", handleContextMenu, true);
    document.addEventListener("dragstart", handleDragStart, true);
    // document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      // document.removeEventListener("contextmenu", handleContextMenu, true);
      document.removeEventListener("dragstart", handleDragStart, true);
      // document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);

  return null;
}
