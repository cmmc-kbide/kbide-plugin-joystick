
  Blockly.Blocks["joystick_block"] = {
    init: function() {
      this.appendDummyInput().appendField("JOYSTICK");
      this.appendDummyInput()
        .appendField("SWITCH PIN")
        .appendField(new Blockly.FieldTextInput(""), "JOYSTICK_SWITCH_PIN")
        .appendField(
          new Blockly.FieldVariable("JOYSTICK_SWITCH"),
          "JOYSTICK_SWITCH"
        );
      this.appendDummyInput()
        .appendField("POSITION ( X ) PIN")
        .appendField(new Blockly.FieldTextInput(""), "PIN_X")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("JOYSTICK_POSITION_X"),
          "JOYSTICK_POSITION_X"
        );
      this.appendDummyInput()
        .appendField("POSITION ( Y ) PIN")
        .appendField(new Blockly.FieldTextInput(""), "PIN_Y")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("JOYSTICK_POSITION_Y"),
          "JOYSTICK_POSITION_Y"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

