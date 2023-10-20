// import Image from "next/image";
"use client";
import React, { Component } from "react";
// import { render } from "react-dom";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/tomorrow";

export default class Main extends Component {
  render() {
    return (
      <div>
        <AceEditor mode="javascript" theme="tomorrow" />
      </div>
    );
  }
}
