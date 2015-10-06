# ORB-authorprofile

This repository is related to the Altmetrics Hackathon. 

It tries to make an actionable mockup for an Author Profile using OpenResearcherBadges.org

OpenResearcherBadges provide a way for researchers to express whith what kind of activity they contributed to Research output.

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
