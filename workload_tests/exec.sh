vegeta attack -duration=10s -rate=100 -targets=targets.txt -output=attack.bin; vegeta plot -title="Resultados do Teste de Carga" attack.bin > results.html; firefox results.html
