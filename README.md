# Project 'Eat, Drink, Sleep'

##### Problems with Status Quo:
It's difficult to be a tourist - you have to plan your itinerary long in advance and research where you have to go for each place.

##### Our solution:
Here's where we come in. We take inputs from the user (e.g. what do they want to visit? Museums, Bars, Historic sights, etc) and use it to calculate a route for them. The route created would not be optimised to save time, but also be chronological in its visit-order (e.g. if a user wants a museum first then bar second, then the route would go in that specific order).

##### Our Team:
George Tarleton, Euan Macqueen, Oliver Ursell, Mehdi Naderi Varandi

##### How to Use:
We recommend cloning the repository to your own machine. The recommended minimum tech stack to have is:
1 - Angular
2 - Ionic framework
3 - Android phone (also compatible with iOS)
4 - Google Maps API

Our application will not work without a Google Maps API Key. We have removed our own in order to prevent malicious access, hence you must provide your own (you can acquire one through Google's Developer Console). Once you have an API Key, please place it in the script tag (Line 21) in the src/index.html file as the value for the src attribute. This will allow the application to use your own Google Maps API and function as intended.

If needed, we also recommend having:
5 - Uber API Key
6 - Lyft API Key

The multi-integration button / extra services button in the application will not work without deeplinks to Uber and Lyft. To implement this, you must grab an API Key from Uber and Lyft. Once this is done, combine this API Key with a deeplink provided from their documentation (e.g. uber/key=API_KEY). Place these 2 deep links in src/app/multi-integration-button.html (Line 9 for Uber, Line 16 for Lyft) as the value to the src attributes.
