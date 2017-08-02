package sk.game.mock;

import sk.game.GameCommand;
import sk.game.InputProcessor;
import sk.game.commands.TravelCommand;

/**
 * @author hamp645
 * 
 */
public class MockInputProcessor implements InputProcessor {

  @Override
  public GameCommand parseInput(final String inputString) {

    if (inputString.equals("east")) {
      return new TravelCommand(new PlayerCharacter(), "east");
    } else {
      return new MockOutputGameCommand(inputString);
    }

  }
}
