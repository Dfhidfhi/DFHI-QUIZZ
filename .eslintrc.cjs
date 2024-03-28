module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                "src/**/*.{js,vue,jsx,cjs,mjs, }", 
            ],
            "excludedFiles": ["main.js"],
          
            
        }
    ],
    "ignorePatterns": ["DFHI-QUIZZ/playwright.config.js" ],
   
  
    "plugins": [
        "vue"
    ],
    "rules": {
    },
}
