#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )


import java.util.Date;
import org.apache.log4j.Logger;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 *
 * @author Thomas Fritz <fritz@punkt.at>
 */
public class Application extends Thread {

	public static Logger logger = Logger.getLogger(Application.class);

	public static void main(String[] args) {
		ConfigurableApplicationContext context = new ClassPathXmlApplicationContext("conf/applicationContext.xml");

		Date date = (Date) context.getBean("foo");
		logger.info("Loaded Bean 'foo' correctly: " + date);

		logger.info("Exiting!");
		System.exit(0);
	}
}
