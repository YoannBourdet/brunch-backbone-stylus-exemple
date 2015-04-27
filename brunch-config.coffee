module.exports = config:
    files:
        javascripts: joinTo:
            'app.js': /^app/
        stylesheets: joinTo:
            'styles.css'
        templates: joinTo:
            'app.js'
    modules:
        nameCleaner: (path) ->
            path
                # On vire les préfixes `app/` (classique) et `app/externals/`
                .replace /^app\/(?:externals\/)?/, ''