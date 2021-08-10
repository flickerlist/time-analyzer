# .PHONY: build

ANTLR=java -jar /usr/local/lib/antlr-4.9.2-complete.jar
GRUN=java org.antlr.v4.gui.TestRig

gen-parser: clean-parser
	pushd lib/grammar; \
	$(ANTLR) -Dlanguage=JavaScript TimeLexer.g4 -visitor; \
	$(ANTLR) -Dlanguage=JavaScript TimeParser.g4 -visitor; \
	popd;

gen-grun:
	pushd lib/grammar; \
	mkdir -p .antlr && rm -rf .antlr/*; \
	cp ./TimeLexer.g4 .antlr/TimeLexer.g4; \
	cp ./TimeParser.g4 .antlr/TimeParser.g4; \
	pushd .antlr; \
	$(ANTLR) TimeLexer.g4 TimeLexer.g4 -visitor; \
	$(ANTLR) TimeParser.g4 TimeParser.g4 -visitor; \
	javac *.java; \
	popd; popd;

grun:
	pushd lib/grammar/.antlr; \
	$(GRUN) Time program -gui;

clean-parser:
	rm -rf lib/grammar/*.interp lib/grammar/*.tokens lib/grammar/*.js;