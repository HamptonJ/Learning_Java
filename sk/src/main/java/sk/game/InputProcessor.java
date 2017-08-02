package sk.game;

/**
 * @author hamp645
 *
 */
public interface InputProcessor {
  GameCommand parseInput(String inputString);
}
