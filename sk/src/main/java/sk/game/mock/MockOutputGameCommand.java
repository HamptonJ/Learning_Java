package sk.game.mock;

import sk.game.CommandResult;
import sk.game.GameCommand;

/**
 * @author hamp645
 *
 */
public class MockOutputGameCommand implements GameCommand {
  private final String inputString;

  /**
   * @param inputString
   */
  public MockOutputGameCommand(final String inputString) {
    this.inputString = inputString;
  }

  @Override
  public CommandResult execute() {
    return new MockOutputResult(this.inputString);
  }
}
