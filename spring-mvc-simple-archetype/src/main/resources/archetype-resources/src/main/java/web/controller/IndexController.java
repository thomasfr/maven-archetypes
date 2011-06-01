#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.web.controller;

import org.apache.log4j.Logger;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {

    private static final Logger logger = Logger.getLogger(IndexController.class);

    @RequestMapping("/")
    public ModelAndView getStartPage() {
        logger.info("Requesting Startpage");
        ModelAndView mav = new ModelAndView("index");
        return mav;
    }

   @RequestMapping("/test")
	public ModelAndView getTestPage() {
		logger.info("Requesting TestPage");
		ModelAndView mav = new ModelAndView("test");
		mav.addObject("message", "This is the TestPage");
		return mav;
	}

}