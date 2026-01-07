# Script pour renommer les fichiers avec espaces
$imgPath = "assets/img"

# Liste des fichiers à renommer
$renames = @{
    "logo dinausore.png" = "logo-dinausore.png"
    "mary anning.avif" = "mary-anning.avif"
    "femme de science.avif" = "femme-de-science.avif"
    "livre 2.avif" = "livre-2.avif"
    "dinausore 1.avif" = "dinausore-1.avif"
    "montagne.avif" = "montagne.avif"
}

foreach ($old in $renames.Keys) {
    $oldPath = Join-Path $imgPath $old
    $newPath = Join-Path $imgPath $renames[$old]
    
    if (Test-Path $oldPath) {
        Rename-Item -Path $oldPath -NewName $renames[$old]
        Write-Host "✓ Renommé: $old -> $($renames[$old])"
    }
}

Write-Host "`nFichiers renommés avec succès!"
