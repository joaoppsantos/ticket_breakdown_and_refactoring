# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Explanation

&nbsp;

- ### Removed nested conditional statements in order to have a more human and more structured view, at the moment, we can see the following conditions:

  | if no event then early return TRIVIAL_PARTITION_KEY  
   | if no partition key then create a partition key (using crypto dependency)  
   | if partition key is not a string then stringify it  
   | if partition key length is bigger than the maximum expected length (256) then digest the partition key

  After all this, return partition key.

&nbsp;

- ### Replaced the concept of candidate for partitionKey (which already existed) in order for the developer to only require to have in consideration the concept of partitionKey which translates in less entropy.
