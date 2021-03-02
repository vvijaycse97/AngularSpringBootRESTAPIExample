package com.example.controller;

import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import com.example.user.GithubUser;
import com.example.util.ConstantsUtil;


@RestController
public class MyController {

	private static final Logger LOG = LoggerFactory.getLogger(MyController.class);
	
	@RequestMapping(value="/test", method=RequestMethod.GET)
	public GithubUser test(Model model, HttpSession session,@RequestParam ("githubusername") String ghuname,GithubUser user) {
		LOG.info("test() and param value githubusername is ----->"+ghuname);
		GithubUser githubUser = user;
		String githubLink = "/" + ghuname;
		String githubFullLink = ConstantsUtil.GITHUB_USER_INFO + githubLink;
	
		try {

			RestTemplate restTemplate = new RestTemplate();
			githubUser = restTemplate.getForObject(githubFullLink, GithubUser.class);

			if (ghuname != null)
			{
				if (LOG.isInfoEnabled()) {
					LOG.info("User Details:    " + githubUser.toString());
					LOG.info(" github api user login name from Angular  -->" + ghuname);
					LOG.info(" github api user login   -->" + githubUser.getLogin());
					LOG.info(" github api user created date   -->" + githubUser.getCreatedAt());
					LOG.info(" github api user updated date   -->" + githubUser.getUpdatedAt());
					LOG.info(" github api user public repos   -->" + githubUser.getPublicRepos());
				}
			}
			LOG.info(" Returning githubuser object from spring boot to angular" + githubUser.toString());
			return githubUser; 

		} catch (HttpClientErrorException e) {

			LOG.error("HttpClientErrorException occurred ");
			e.printStackTrace();			

		}
		LOG.info("Not able to fetch the entered github user details !!!!");
		githubUser.setLogin("Invalid User");
		return githubUser;		
	}
}
