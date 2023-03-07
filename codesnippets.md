---
layout: main.njk
---
# Page header

## SCSS

```
//mixins / helpers / functions
//write both css custom property method and fallback for unsupporting clients
@mixin varCompatSimple($property, $variableName) {
    #{$property} : map.get($vars, #{$variableName});
    #{$property} : var(--#{$variableName}); 
}
```