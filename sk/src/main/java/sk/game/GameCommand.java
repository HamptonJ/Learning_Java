package sk.game;

/**
 * @author hamp645
 *
 */
public interface GameCommand {
  /**
   * Causes the command to be executed
   * @return the result
   */
  CommandResult execute();
}
