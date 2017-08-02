package sk.game;

/**
 * @author hamp645
 *
 */
public interface CommandProcessor {

  /**
   * @param command
   * @return the result
   */
  CommandResult handle(GameCommand command);

}
