package sk.game.naive;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import sk.game.CommandResult;
import sk.game.OutputCommandResult;
import sk.game.ResultProcessor;

/**
 * @author hamp645
 *
 */
@Component
public class NaiveResultProcessor implements ResultProcessor {
  private final SimpMessagingTemplate template;

  /**
   * @param template
   */
  @Autowired
  public NaiveResultProcessor(final SimpMessagingTemplate template) {
    this.template = template;
  }

  @Override
  public void handleResult(final CommandResult result) {
    if (result instanceof OutputCommandResult) {
      OutputCommandResult r = (OutputCommandResult) result;
      template.convertAndSend("/topic/progress", r.getOutput());
    }
  }
}
