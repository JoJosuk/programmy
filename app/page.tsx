// import Image from "next/image";
"use client";
import React, { Component } from "react";
// import { render } from "react-dom";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/monokai";

export default class Main extends Component {
  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="monokai"
        className="w-screen h-screen"
      />
    );
  }
}
