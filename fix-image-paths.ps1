# Script pour remplacer tous les chemins d'images dans les fichiers HTML
$rootPath = "c:\Users\vicai\Documents\GitHub\projet-sae-105-2025-Jeremyvcr"

$replacements = @{
    'logo%20dinausore' = 'logo-dinausore'
    'mary%20anning' = 'mary-anning'
    'femme%20de%20science' = 'femme-de-science'
    'livre%202' = 'livre-2'
    'dinausore%201' = 'dinausore-1'
}

Get-ChildItem -Path $rootPath -Filter *.html -Recurse | ForEach-Object {
    $file = $_.FullName
    $content = Get-Content $file -Raw -Encoding UTF8
    
    foreach ($old in $replacements.Keys) {
        $new = $replacements[$old]
        if ($content -match $old) {
            $content = $content -replace $old, $new
            Write-Host "✓ $($_.Name): remplacé $old -> $new"
        }
    }
    
    Set-Content -Path $file -Value $content -Encoding UTF8 -NoNewline
}

Write-Host "`n✓ Tous les chemins d'images mis à jour!"
