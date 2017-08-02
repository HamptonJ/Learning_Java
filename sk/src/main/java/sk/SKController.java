package sk;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import sk.game.GameEngine;

/**
 * @author hamp645
 */
@RestController
public class SKController {
  /** Static logger for this class */
  private static org.slf4j.Logger LOG = org.slf4j.LoggerFactory.getLogger(SKController.class);

  @Autowired
  private GameEngine gameEngine;

  /**
   * @param input
   * @return the response
   */
  @RequestMapping(value = "/input", method = RequestMethod.POST)
  public ResponseEntity<?> input(@RequestBody final String input) {
    LOG.debug("INPUT: " + input);
    gameEngine.handleInput(input);
    return ResponseEntity.ok("RECEIVED");
  }
}