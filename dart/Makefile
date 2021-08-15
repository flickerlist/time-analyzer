# .PHONY: build

ANTLR=java -jar /usr/local/lib/antlr-4.9.2-complete.jar
GRUN=java org.antlr.v4.gui.TestRig

gen-parser: clean-parser
	mkdir -p lib/grammar; \
	cp -r ../grammar/*.g4 lib/grammar/; \
	pushd lib/grammar; \
	$(ANTLR) -Dlanguage=Dart TimeLexer.g4 -visitor; \
	$(ANTLR) -Dlanguage=Dart TimeParser.g4 -visitor; \
	popd;

clean-parser:
	rm -rf lib/grammar/*.interp lib/grammar/*.tokens lib/grammar/*.dart;