package sk.game.commands;

import sk.game.CommandResult;
import sk.game.GameCommand;
import sk.game.character.GameCharacter;
import sk.game.mock.MockOutputResult;

/**
 * @author Jhampton
 * 
 */
public class TravelCommand implements GameCommand {

  private final String direction;
  private final GameCharacter character;

  /**
   * @param string
   */
  public TravelCommand(final GameCharacter character, final String direction) {
    this.character = character;
    this.direction = direction;
  }

  /*
   * (non-Javadoc)
   * 
   * @see sk.game.GameCommand#execute()
   */
  @Override
  public CommandResult execute() {
    //Tell the Character to move in the direction
    this.character.move(direction);
    return new MockOutputResult("You Move " + direction);
  }

}
