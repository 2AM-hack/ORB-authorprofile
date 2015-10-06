# ORB-authorprofile
*This repository is related to the Altmetrics Hackathon. 2015-10-06*
![Open Research Badges](http://wp.mozillascience.org/wp-content/uploads/2014/11/badges.png)

##introduction
What we try to do here is to create a CV page for researchers that include [Altmetrics](http://www.altmetric.com/) and [Open Research Badges](http://openresearchbadges.org/).
![Author Profile](https://raw.githubusercontent.com/2AM-hack/ORB-authorprofile/master/author-profile-sketch.jpg)

OpenResearcherBadges provide a way for researchers to express whith what kind of activity they contributed to Research output.

Providing Badges for researchers, and aggregating them can provide for alternative views on the knowledge capacities of research groups, and whole institutions.
So we can see:  if research groups have all the skillsets , where the experts on certain skillsets are.
![Group Profile](https://raw.githubusercontent.com/2AM-hack/ORB-authorprofile/master/research-group-sketch.jpg)

## The Hackaton result
https://raw.githubusercontent.com/2AM-hack/ORB-authorprofile/master/template.html

## Useful links
- https://github.com/mozillascience/PaperBadger
- https://badges.mozillascience.org/
- http://openresearchbadges.org/
 
## architecture
![arch](https://raw.githubusercontent.com/mozillascience/PaperBadger/master/public/img/Badges-ProposedWorkflow.jpg)

## Some thoughts on the effects of badges
When we talk about Altmetrics we probably think about metrics on the output of a research process. Citations, views, likes, tweets, bookmarks, etc. measuring the ‘marketing reach’ of the output (entity type: publications, data, etc).
But you can also try to measure the input of the research process (entity type: people, hence: ORCiD). 
The whole idea is to reward researchers for their specialist-contribution (what they are good at, and having fun doing) in the research process. Releasing the publication pressure, and increasing the quality of research, and letting reseachers do that part what they most fancy to do.
- researchers get to know what career paths fits to them

## Our thoughts on how we got this to work
The badges are linked to the ORCID profile of the contributor.

We followed some examples from the [Mozilla Science Blog](https://www.mozillascience.org/contributorship-badges-for-science-view-them-now)

Journals using badges from submission to publication:

- http://openresearchsoftware.metajnl.com/articles/10.5334/jors.ad/metrics/#author-contributions
- http://www.gigasciencejournal.com/content/3/1/18/about#open-badges

The same badges can be viewed at ORCID (scroll to works and expand the title)

- http://orcid.org/0000-0002-4360-2226
- http://orcid.org/0000-0002-9107-7681

ORCID does not store information about the badges ; from the ORCID API you only get the basics: http://pub.orcid.org/v1.2/0000-0002-9107-7681/orcid-works/

So, ORCID gets the badges live with javascript from the Mozilla servers: https://badges.mozillascience.org/

API Endpoints

    GET /badges
        Get all badges we issue
    GET /badges/:badge
        Get all badge instances of a certain badge
        e.g. /badges/formal_analysis
    GET /users/:orcid/badges
        Get all badge instances earned by a user
        e.g. /users/0000-0001-5979-8713/badges
    GET /users/:orcid/badges/:badge
        Get all badge instances of a certain badge earned by a user
        e.g. /users/0000-0001-5979-8713/badges/data_curation
    GET /papers/:doi1/:doi2/badges
        Get all badge instances for a paper.
        e.g. /papers/10.1186/2047-217X-3-18/badges
    GET /papers/:doi1/:doi2/badges/:badge
        Get all badge instances of a certain badge for a paper.
        e.g. /papers/10.1186/2047-217X-3-18/badges/investigation
    GET /papers/:doi1/:doi2/badges/:orcid/badges
        Get all badge instances earned by a user for a paper.
        e.g. /papers/10.1186/2047-217X-3-18/users/0000-0001-5979-8713/badges
    GET /papers/:doi1/:doi2/badges/:orcid/badges/:badge
        Get all badge instances of a certain badge earned by a user for a paper.
        e.g. /papers/10.1186/2047-217X-3-18/users/0000-0001-5979-8713/badges/data_curation
    POST /papers/:doi1/:doi2/badges/:orcid/badges/:badge
        Issue a badge



We will use this author http://orcid.org/0000-0002-9107-7681
to be used as an example in the proof of concept

If you look in the source of this html you'll see javastript file is used called 
https://badges.mozillascience.org/widgets/paper-badger-widget.js

this is contained in a div, addeing variables.
var conf={"article-doi": "10.5334/jors.ad", "container-class": "badge-container-18608322"};showBadges(conf);

We need to give it variables  per paper; the DOI and the ORcid. in order to get the badges for that paper, for that author.

## The documentation how to use the widget is here
https://github.com/mozillascience/PaperBadger


Our test author's papers with badges are here:

https://badges.mozillascience.org/users/0000-0002-9107-7681/badges



