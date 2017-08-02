package sk.game;

/**
 * @author hamp645
 *
 */
public abstract class AbstractOutputResult implements OutputCommandResult {
  private final String inputString;

  /**
   * @param inputString
   */
  public AbstractOutputResult(final String inputString) {
    this.inputString = inputString;
  }

  @Override
  public String getOutput() {
    return this.inputString;
  }
}
