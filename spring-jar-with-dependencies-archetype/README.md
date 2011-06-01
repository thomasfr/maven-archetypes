spring-jar-with-dependencies-archetype
======================================

This is an archetype for Maven for creating a basic 
executable (java -jar application.jar) jar

Configurations
--------------

### Core
* Spring 3.0.5
* Log4J 1.2.16

Usage
-----

	git clone git://github.com/thomasfr/maven-archetypes.git maven-archetypes
	cd maven-archetypes/spring-jar-with-dependencies-archetype
	mvn clean install


Create a new project with this archetype
----------------------------------------

	mvn archetype:generate -DarchetypeCatalog=local
	
