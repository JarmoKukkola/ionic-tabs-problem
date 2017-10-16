# Demonstrating a bug in Ionic 3
Navigation between pages with ion-tabs elements is broken (or not well documented).

Expected behaviour:

A) Clicking a blue button in Tabs1Tab1Page should navigate to Tabs2Page with Tabs2Tab1Page and Tabs2Tab2Page tabs.

B) Clicking a blue button in Tabs2Tab1Page should navigate to Tabs1Page with Tabs1Tab1Page and Tabs1Tab2Page tabs.

Observed unwanted behaviours (depending on the navigation used):

* Multiple Tabs elements are shown.

* Navigation to Tabs2Page succeeds but Tabs1Tab1Page is shown instead of Tabs2Tab1Page.

The following partly fixes the problems:

* Pressing this.app.getRootNav().push() button twice achieves expected behaviour A). First Tabs1Page is replaced by Tabs2Page, then Tabs1Tab1Page is replaced with Tabs2Tab1Page. Then pressing back button twice achieves expected behaviour B). However, the behaviour should happen only with one press.

* Pressing this.app.getRootNav().setRoot() button twice achieves expected behaviour A). First Tabs1Page is replaced by Tabs2Page, then Tabs1Tab1Page is replaced with Tabs2Tab1Page. Then pressing this.app.getRootNav().setRoot() button twice achieves expected behaviour B). First Tabs2Page is replaced by Tabs1Page, then Tabs2Tab1Page is replaced with Tabs1Tab1Page. Again, one extra press of button is needed.
