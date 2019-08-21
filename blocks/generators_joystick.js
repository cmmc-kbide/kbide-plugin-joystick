
  Blockly.JavaScript["joystick_block"] = function(block) {
    var text_joystick_switch_pin = block.getFieldValue("JOYSTICK_SWITCH_PIN");
    var variable_joystick_switch = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("JOYSTICK_SWITCH"),
      Blockly.Variables.NAME_TYPE
    );
    var text_pin_x = block.getFieldValue("PIN_X");
    var variable_joystick_position_x = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("JOYSTICK_POSITION_X"),
      Blockly.Variables.NAME_TYPE
    );
    var text_pin_y = block.getFieldValue("PIN_Y");
    var variable_joystick_position_y = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("JOYSTICK_POSITION_Y"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #VARIABLE
      const int ${variable_joystick_switch}_ = ${text_joystick_switch_pin}; // digital pin connected to switch output
      const int ${variable_joystick_position_x}_ = ${text_pin_x}; // analog pin connected to X output
      const int ${variable_joystick_position_y}_ = ${text_pin_y}; // analog pin connected to Y output
    #END
    pinMode(${variable_joystick_switch}_, INPUT);
    digitalWrite(${variable_joystick_switch}_, HIGH);
    `;
    return code;
  };
