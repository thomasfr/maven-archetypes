spring-mvc-simple-archetype
===========================

This is an archetype for Maven for creating a simple
minimalistic starting Spring 3.x Web MVC project.

Configurations
--------------

### Core
* Spring 3.0.5
* Log4J 1.2.16
* Velocity 1.7
* Jetty Maven Plugin 7.3.1
* ExtJS 4.0.1 Sources

### Controller

IndexController with two RequestMappings:

* / - ExtJS sources are included on the homepage
* /test



Usage
-----

	git clone git://github.com/thomasfr/maven-archetypes.git maven-archetypes
	cd maven-archetypes/spring-mvc-simple-archetype
	mvn clean install


Create a new project with this archetype
----------------------------------------

	mvn archetype:generate -DarchetypeCatalog=local
	
