npm run build - to run 
-----------------------------------------------------------------
in JSON file:
***
-take all files from folder src and convert in folder js. rules for converting are in the file .babelrc    
"build": "babel src -d js" 
***
-add /main.js to end if you whant to convert in ome js file
-----------------------------------------------------------------
in .babelrc
***
"presets": ["env"] //ES 2015, ES 2016 and so on in same as "env".
see other presets in documentation for indication browsers, their versions, node versions, etc
-----------------------------------------------------------------
