# Prep exercise week 4


## Exercise

Last week you updated your database to be normalized. Now that you have some more NoSQL knowledge, convert your database
to a document-based database. Think about the following:

- What are the collections?
  - collections in a NoSQL database are groupings of documents. The structure of the collection is more flexible - it's not supposed to have a strict schema, and items are not supposed to be of the same type.  
- What information will you embed in a document and which will you store normalised?
  - I'd embed data when it's NOT expected to be used in multiple documents & be updated frequently.
  - I'd normalize data when it's expected to be used in multiple documents & be updated frequently.

## Discussion (Try to write answers to these questions in text, provide queries and commands when necessary)

- What made you decide when to embed information? What assumptions did you make?
  - I'd choose to embed ingredients and steps within the recipe document if: each recipe has a unique combination of ingredients and steps, and the recipe will not need to be frequently update with individual ingredients or steps. Because they are tightly connected with the recipe and unlikely to be used independently.
- If you were given MySQL and MongoDB as choices to build the recipe's database at the beginning, which one would you
  choose and why?
  - I'd choose MongoDB: it would allow to store data in a less complex way. Retrieving data from MongoDB collections would be easier than with using SQL queries to combine different tables.  