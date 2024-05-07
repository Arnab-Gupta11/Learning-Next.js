/*

<-------------- Server & Client Component (see notion) --------------->
>>> By default all components inside app folder are server components.we cannot use hooks,onclick fuction in these components.For these case we need to add "use client" line at top of the component. Then server component will turn into client component but its create problem in production. 
>>> Whenever you want to create client components create a component folder inside src folder. Then create all the client components inside it. Remember add "use client" line at top of the component.


<-------------- Routig -------------->

>>> Dynamic route: 
Create a folder with square bracket like this [id]. This id value will save in "params" object. and any query can access using "searchParams" object.

>>> Group Route :
 Create a folder with first bracket like this (Dashboard).

 <------ metadata -------->
 >>> metadata only works in server component.

*/
