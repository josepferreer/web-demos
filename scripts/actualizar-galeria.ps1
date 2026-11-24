# Lee demos/*/demo.json y regenera galeria/demos.js (lo que pinta la portada).
# Ejecutar tras añadir o cambiar una demo:  ./scripts/actualizar-galeria.ps1

$raiz = Split-Path -Parent $PSScriptRoot
$demos = @()

Get-ChildItem (Join-Path $raiz 'demos') -Directory | Sort-Object Name -Descending | ForEach-Object {
  $json = Join-Path $_.FullName 'demo.json'
  if (-not (Test-Path $json)) {
    Write-Warning "Sin demo.json, se omite: $($_.Name)"
    return
  }
  $d = Get-Content $json -Raw -Encoding UTF8 | ConvertFrom-Json
  if (-not (Test-Path (Join-Path $_.FullName 'index.html'))) {
    Write-Warning "Sin index.html: $($_.Name)"
  }
  $tienePreview = Test-Path (Join-Path $_.FullName 'preview.png')
  if (-not $tienePreview) { Write-Warning "Sin preview.png: $($_.Name)" }

  $demos += [ordered]@{
    carpeta     = $_.Name
    titulo      = $d.titulo
    autor       = $d.autor
    fecha       = $d.fecha
    sector      = $d.sector
    descripcion = $d.descripcion
    preview     = $tienePreview
  }
}

$contenido = "window.DEMOS = " + (ConvertTo-Json -InputObject @($demos) -Depth 4) + ";`n"
[System.IO.File]::WriteAllText((Join-Path $raiz 'galeria\demos.js'), $contenido, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "Galería actualizada: $($demos.Count) demo(s)."
