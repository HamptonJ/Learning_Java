package sk.game.mock;

import sk.game.GameCommand;
import sk.game.InputProcessor;

/**
 * @author hamp645
 *
 */
public class MockInputProcessor implements InputProcessor {

  @Override
  public GameCommand parseInput(final String inputString) {
    return new MockOutputGameCommand(inputString);
  }
}
