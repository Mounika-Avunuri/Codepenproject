import React from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/css/xml'
import {Controlled as ControlledEditor} from 'react-codemirror2'
const Editor = ({displayName}) => {
  return (
      <div className="editor-container">
          <div className="editor-title">
              {displayName}
              
          </div>
    </div>
  )
}

export default Editor