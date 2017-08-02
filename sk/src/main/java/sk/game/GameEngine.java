package sk.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sk.game.mock.MockInputProcessor;
import sk.game.naive.NaiveCommandProcessor;

/**
 * @author hamp645
 */
@Service
public class GameEngine {
  private final InputProcessor inputProcessor = new MockInputProcessor();

  private final CommandProcessor commandProcessor = new NaiveCommandProcessor();

  @Autowired
  private ResultProcessor resultProcessor;

  /**
   * @param input
   */
  public void handleInput(final String input) {
    GameCommand command = inputProcessor.parseInput(input);
    CommandResult result = commandProcessor.handle(command);
    resultProcessor.handleResult(result);
  }
}
