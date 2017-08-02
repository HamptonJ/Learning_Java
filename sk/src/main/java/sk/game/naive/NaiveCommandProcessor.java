package sk.game.naive;

import sk.game.CommandProcessor;
import sk.game.CommandResult;
import sk.game.GameCommand;

/**
 * @author hamp645
 *
 */
public class NaiveCommandProcessor implements CommandProcessor {
  @Override
  public CommandResult handle(final GameCommand command) {
    return command.execute();
  }
}
