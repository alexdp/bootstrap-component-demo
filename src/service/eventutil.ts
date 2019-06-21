export class EventUtil
{
  private static observable = $({});

  /**
   * Subscribe to an event
   */
  public static subscribe = function(...args){
    EventUtil.observable.on.apply(EventUtil.observable, args);
  };

  /**
   * unsubscribe to an event
   */
  public static unsubscribe = function(...args){
    EventUtil.observable.off.apply(EventUtil.observable, args);
  };

  /**
   * publish an event
   */
  public static publish = function(...args){
    EventUtil.observable.trigger.apply( EventUtil.observable, args);
  };
}


// Usage sample : 
// EventUtil.subscribe("custom-event", (e, data) => console.log(data));
// EventUtil.publish("custom-event", "hi there");
