Search.setIndex({"docnames": ["index", "materials/dgms", "materials/frequentist-learning", "materials/inference", "materials/introduction", "materials/latent-variable-models", "materials/predictive-models", "materials/probability-conditional", "materials/probability-continuous", "materials/probability-discrete", "materials/vectorization-advanced", "materials/vectorization-basics"], "filenames": ["index.md", "materials/dgms.ipynb", "materials/frequentist-learning.ipynb", "materials/inference.ipynb", "materials/introduction.ipynb", "materials/latent-variable-models.ipynb", "materials/predictive-models.ipynb", "materials/probability-conditional.ipynb", "materials/probability-continuous.ipynb", "materials/probability-discrete.ipynb", "materials/vectorization-advanced.ipynb", "materials/vectorization-basics.ipynb"], "titles": ["Probabilistic Foundations of ML", "<span class=\"section-number\">6. </span>Directed Graphical Models", "<span class=\"section-number\">7. </span>The Basics of Frequentist Learning", "<span class=\"section-number\">11. </span>Inference", "<span class=\"section-number\">1. </span>What is Probabilistic ML?", "<span class=\"section-number\">10. </span>Latent Variable Models (LVMs)", "<span class=\"section-number\">9. </span>Predictive Models", "<span class=\"section-number\">5. </span>Conditional Probability (Discrete)", "<span class=\"section-number\">8. </span>Continuous Probability", "<span class=\"section-number\">4. </span>Probability (Discrete)", "<span class=\"section-number\">3. </span>Advanced Vectorization in <code class=\"docutils literal notranslate\"><span class=\"pre\">Jax</span></code>", "<span class=\"section-number\">2. </span>An Introduction to \u201cVectorization\u201d in <code class=\"docutils literal notranslate\"><span class=\"pre\">Jax</span></code>"], "terms": {"thi": [0, 4, 7, 8, 9, 10, 11], "book": 0, "current": [0, 7, 11], "under": [0, 10, 11], "construct": 0, "instructor": 0, "yaniv": [0, 4], "yacobi": 0, "semest": 0, "fall": 0, "2024": 0, "number": [0, 7, 8, 9, 10, 11], "cs": 0, "349": 0, "descript": 0, "In": [0, 7, 8, 9, 10, 11], "recent": 0, "year": 0, "artifici": 0, "intellig": 0, "ha": [0, 8, 9, 10, 11], "enabl": 0, "applic": [0, 4, 10], "were": [0, 9, 10, 11], "previous": [0, 7], "thought": [0, 10, 11], "possibl": [0, 9, 11], "from": [0, 1, 4, 7, 8, 9, 10, 11], "system": [0, 9], "propos": 0, "novel": 0, "drug": 0, "new": [0, 7, 8, 9, 10, 11], "art": 0, "music": 0, "accur": [0, 11], "reliabl": 0, "outcom": [0, 8, 9], "medic": [0, 4, 9], "intervent": 0, "real": 0, "time": [0, 7, 9, 10, 11], "But": [0, 11], "what": [0, 1, 7, 8, 9, 10, 11], "develop": 0, "machin": [0, 4, 9], "learn": [0, 4, 11], "paradigm": [0, 10, 11], "cast": [0, 10], "advanc": 0, "like": [0, 7, 9, 11], "neural": 0, "network": 0, "statist": [0, 7, 9], "framework": [0, 11], "we": [0, 7, 8, 9, 10, 11], "introduc": [0, 7, 8, 9, 10, 11], "concept": [0, 7, 9], "behind": [0, 7, 9, 11], "focus": [0, 1, 2, 8], "connect": [0, 9], "theori": 0, "world": 0, "hand": [0, 9], "practic": [0, 2, 4, 7, 9, 10, 11], "lai": 0, "studi": 0, "research": 0, "topic": [0, 1, 2, 4, 8], "includ": [0, 10], "direct": [0, 8], "graphic": [0, 11], "deep": 0, "bayesian": 0, "regress": [0, 1], "classif": 0, "latent": 0, "variabl": [0, 1, 2, 7, 8, 9, 10, 11], "cluster": 0, "dimension": [0, 10, 11], "reduct": 0, "seri": 0, "forecast": 0, "student": [0, 4, 8], "get": [0, 7, 10], "experi": 0, "build": [0, 9, 10, 11], "task": [0, 8, 9], "most": 0, "taken": [0, 9, 11], "healthcar": 0, "context": [0, 7, 9], "us": [0, 1, 2, 7, 8, 10, 11], "program": [0, 8], "languag": [0, 7, 8, 9], "base": [0, 8, 11], "python": [0, 9, 10, 11], "todo": [0, 9, 10, 11], "an": [0, 7, 8, 9, 10], "vector": 0, "jax": [0, 7, 8, 9], "probabl": 0, "discret": 0, "condit": [0, 1, 9, 10], "The": [0, 7, 9, 10, 11], "basic": [0, 9, 10, 11], "frequentist": 0, "continu": [0, 7, 9, 10], "lvm": 0, "two": [1, 7, 8, 9, 10, 11], "notat": [1, 2, 8, 10, 11], "re": [1, 7, 9, 10, 11], "write": [1, 2, 7, 9, 10, 11], "all": [1, 7, 9, 10, 11], "previou": [1, 8, 9, 10, 11], "week": [1, 7, 9], "dgm": 1, "specifi": [1, 7, 9, 11], "depend": [1, 7, 11], "focu": [1, 10], "linear": 1, "familiar": [1, 8], "common": [1, 8, 10], "structur": 1, "ask": [1, 8], "them": [1, 8, 9, 10], "match": [1, 8, 11], "which": [1, 7, 8, 9, 10, 11], "good": 1, "numpyro": [1, 2, 7, 9, 11], "s": [1, 7, 8, 9, 10, 11], "auto": 1, "diff": 1, "fit": [1, 8], "everyth": [1, 11], "outlin": [1, 2, 7, 8, 9, 11], "http": 1, "num": 1, "pyro": 1, "ai": [1, 4], "en": 1, "stabl": 1, "tutori": [1, 10, 11], "model_rend": 1, "html": 1, "onli": [2, 7, 8, 10, 11], "one": [2, 7, 8, 9, 10, 11], "maximum": [2, 11], "likelihood": 2, "estim": [2, 7], "analyt": 2, "introduct": 2, "make": [2, 7, 8, 9, 10, 11], "model": [2, 4, 7, 9, 11], "sampl": [2, 7, 8, 9], "distribut": [2, 8], "determinist": [2, 9], "paramet": [2, 7, 8, 9], "avoid": [2, 11], "plate": 2, "helper": 2, "function": [2, 7, 9, 10, 11], "both": [2, 4, 8, 9, 10], "univari": [2, 7], "multivari": 2, "who": 4, "why": [4, 9, 10, 11], "big": 4, "deal": 4, "cours": [4, 10, 11], "i": [4, 7, 9, 10, 11], "e": [4, 7, 9, 10, 11], "perspect": 4, "highlight": 4, "assumpt": 4, "subject": [4, 10], "natur": 4, "allow": [4, 7, 10, 11], "quantif": 4, "uncertainti": 4, "import": [4, 7, 9, 10, 11], "ethic": 4, "fair": [4, 9], "safeti": 4, "critic": 4, "etc": [4, 9, 10, 11], "provid": [4, 8, 10], "unifi": 4, "think": [4, 11], "deriv": 4, "instead": [4, 10, 11], "bag": 4, "trick": 4, "overview": 4, "you": [4, 7, 8, 9, 10, 11], "can": [4, 7, 8, 9, 10, 11], "expect": 4, "me": 4, "how": [4, 7, 8, 9, 10, 11], "succe": [4, 9], "group": 4, "activ": 4, "commun": 4, "standard": 4, "faculti": 4, "broader": 4, "impact": 4, "analysi": [4, 7, 9], "do": [4, 8, 9, 10, 11], "congratul": 4, "ve": [4, 7, 8, 9], "been": [4, 9, 10, 11], "hire": 4, "join": 4, "team": [4, 9], "intergalact": [4, 9], "hypothet": 4, "hospit": [4, 7, 9], "ihh": [4, 7, 8, 9], "where": [4, 9, 10, 11], "ll": [4, 7, 9, 11], "leverag": [4, 11], "routin": 4, "collect": [4, 7], "data": [4, 7, 8, 9, 10, 11], "help": [4, 9, 10, 11], "improv": [4, 7], "treatment": 4, "beings": [4, 7, 9], "across": [4, 10], "galaxi": 4, "alreadi": [7, 9, 10, 11], "spent": 7, "some": [7, 9, 10, 11], "conduct": 7, "preliminari": [7, 9], "exploratori": [7, 9], "eda": [7, 9], "er": [7, 9], "notic": [7, 10, 11], "consid": [7, 9, 10, 11], "separ": [7, 9], "result": [7, 9, 10, 11], "mislead": 7, "inform": [7, 9, 10], "As": [7, 9, 10], "todai": [7, 9], "your": [7, 9, 10, 11], "also": [7, 10, 11], "relationship": 7, "between": [7, 9, 10, 11], "For": [7, 9, 10, 11], "exampl": [7, 9, 10, 11], "mai": [7, 9, 10, 11], "want": [7, 9, 10, 11], "know": 7, "ar": [7, 9, 10, 11], "certain": [7, 10], "more": [7, 8, 10, 11], "occur": [7, 9, 10], "dai": [7, 9], "patient": [7, 9], "need": [7, 8, 9, 11], "challeng": [7, 9], "so": [7, 9, 10, 11], "far": 7, "howev": [7, 10, 11], "seen": [7, 9], "wai": [7, 10, 11], "character": 7, "stochast": [7, 9], "random": [7, 8, 9], "phenomenon": [7, 9], "independ": [7, 9, 10, 11], "other": [7, 9, 10, 11], "answer": [7, 9, 10, 11], "leav": [7, 9, 11], "later": [7, 9, 10, 11], "abov": [7, 8, 9, 10, 11], "question": [7, 9, 11], "toolset": [7, 9], "befor": [7, 10, 11], "start": [7, 9, 10], "let": [7, 8, 9, 10, 11], "load": [7, 9], "our": [7, 9, 11], "bunch": [7, 9], "librari": [7, 9, 10, 11], "below": [7, 9, 10, 11], "panda": [7, 9], "pd": [7, 9], "matplotlib": [7, 8, 9], "pylab": [7, 9], "plt": [7, 9], "d": [7, 9, 10], "numpi": [7, 9, 10, 11], "jnp": [7, 9, 10, 11], "datafram": [7, 9], "csv_fname": [7, 9], "csv": [7, 9], "read_csv": [7, 9], "index_col": [7, 9], "id": [7, 9], "print": [7, 9, 10, 11], "5": [7, 9, 10, 11], "just": [7, 8, 9, 10, 11], "see": [7, 8, 9, 10, 11], "15": [7, 9, 10, 11], "random_st": [7, 9], "0": [7, 8, 9, 10, 11], "antibiot": [7, 9], "attempt": [7, 9], "disentangl": [7, 9], "9394": [7, 9], "fridai": [7, 9], "allerg": [7, 9], "reaction": [7, 9], "No": [7, 9], "nan": [7, 9], "898": [7, 9], "sundai": [7, 9], "ye": [7, 9], "2398": [7, 9], "saturdai": [7, 9], "entangl": [7, 9], "antenna": [7, 9], "4": [7, 9, 10, 11], "5906": [7, 9], "2343": [7, 9], "mondai": [7, 9], "high": [7, 9, 11], "fever": [7, 9], "8225": [7, 9], "thursdai": [7, 9], "5506": [7, 9], "tuesdai": [7, 9], "6451": [7, 9], "2670": [7, 9], "intox": [7, 9], "3497": [7, 9], "1087": [7, 9], "1819": [7, 9], "2308": [7, 9], "6084": [7, 9], "3724": [7, 9], "non": [7, 8, 10, 11], "here": [7, 9, 10, 11], "precis": [7, 9], "comput": [7, 9, 10, 11], "futur": [7, 9], "translat": [7, 8, 9, 11], "statement": [7, 9, 10], "directli": [7, 9], "code": [7, 8, 9, 10, 11], "run": [7, 9, 11], "suppos": [7, 10, 11], "work": [7, 9, 11], "determin": [7, 9, 10, 11], "next": [7, 9, 11], "come": [7, 9, 10, 11], "given": [7, 9, 10, 11], "count": [7, 8, 9, 11], "divid": [7, 8], "total": [7, 8, 11], "num_intox": 7, "len": 7, "num_tot": 7, "naive_probability_of_intox": 7, "float": [7, 10, 11], "portion": [7, 11], "naiv": 7, "round": 7, "3": [7, 8, 10, 11], "171": 7, "even": [7, 10], "reach": 7, "outer": 7, "univers": 7, "through": 7, "take": [7, 9, 10, 11], "off": [7, 9], "therefor": [7, 11], "suspect": 7, "thei": [7, 8, 9, 10, 11], "might": [7, 10, 11], "drink": 7, "weekend": 7, "decid": [7, 8, 9, 11], "check": [7, 10, 11], "whether": [7, 9], "intuit": [7, 8, 11], "true": [7, 9, 10, 11], "If": [7, 9, 10], "abil": 7, "predict": [7, 8], "days_of_week": 7, "wednesdai": 7, "iter": 7, "over": [7, 9, 11], "select": [7, 9, 10], "came": [7, 9], "specif": [7, 9, 10, 11], "patients_on_dai": 7, "Of": [7, 11], "further": 7, "patient_intoxicated_on_dai": 7, "portion_intoxicated_on_dai": 7, "percentag": [7, 9], "append": [7, 9], "plot": [7, 8, 9], "bar": [7, 9], "axhlin": 7, "color": 7, "red": 7, "label": [7, 9], "add": [7, 9, 10], "axi": [7, 9, 10, 11], "titl": [7, 9], "xtick": [7, 9], "rotat": [7, 9], "30": [7, 9, 11], "xlabel": [7, 9], "ylabel": [7, 9], "legend": 7, "show": [7, 9, 11], "arriv": [7, 9], "chang": [7, 9, 10, 11], "significantli": 7, "thu": 7, "usual": [7, 11], "better": [7, 9], "addit": [7, 10], "have": [7, 8, 9, 10, 11], "definit": [7, 8], "A": [7, 9, 11], "anoth": [7, 9, 10, 11], "denot": [7, 9], "p_i": 7, "cdot": [7, 9, 10, 11], "describ": [7, 9, 10], "It": [7, 8, 10, 11], "repres": [7, 9], "inaccur": 7, "contrast": [7, 10], "p_": 7, "weekdai": 7, "right": [7, 9, 10], "side": [7, 9], "vertic": 7, "line": [7, 10], "space": [7, 8, 9], "support": [7, 9], "sinc": [7, 9, 10, 11], "still": [7, 10, 11], "hold": 7, "left": 7, "That": [7, 10, 11], "1": [7, 8, 9, 10, 11], "mean": [7, 9, 10, 11], "mass": [7, 9], "pmf": [7, 8, 9], "again": [7, 10], "differ": [7, 9, 10, 11], "now": [7, 9, 10, 11], "bernoulli": [7, 8, 9], "valu": [7, 9, 10, 11], "follow": [7, 9, 10, 11], "begin": [7, 8, 10], "align": [7, 8, 10], "underbrac": 7, "rho": [7, 9], "_": 7, "text": [7, 10], "wikipedia": [7, 9], "end": [7, 8, 10, 11], "case": [7, 10], "sens": [7, 9], "els": [7, 10, 11], "express": [7, 10, 11], "ident": [7, 9], "sim": [7, 9], "g": [7, 9, 10, 11], "mathrm": 7, "observ": [7, 8, 9], "tell": [7, 10, 11], "noth": 7, "about": [7, 8, 10, 11], "note": [7, 8, 10, 11], "without": [7, 10], "mani": [7, 8, 9, 10, 11], "could": 7, "higher": [7, 11], "overal": [7, 9], "summari": [7, 9], "r": [7, 9, 10], "c": [7, 10], "rv": [7, 9], "evalu": [7, 9], "defin": [7, 8, 9], "h": [7, 9], "m": [7, 10, 11], "goal": 7, "By": [7, 10, 11], "explor": 7, "did": [7, 9], "each": [7, 8, 9, 10, 11], "don": [7, 9, 11], "t": [7, 9, 11], "forget": [7, 10], "gener": [7, 11], "event": 8, "axiom": 8, "neg": [8, 11], "properti": [8, 9, 10], "categor": [8, 9], "uniform": 8, "gaussian": 8, "beta": 8, "dirichlet": 8, "visual": [8, 9, 11], "part": [8, 10, 11], "2": [8, 10, 11], "recap": 8, "last": [8, 11], "class": [8, 9, 11], "mental": 8, "health": 8, "must": [8, 9], "integr": 8, "bound": 8, "term": [8, 10, 11], "cdf": 8, "pdf": 8, "give": [8, 9, 10], "exactli": [8, 9, 10], "x": [8, 9, 10], "formal": 8, "same": [8, 9, 10, 11], "probabilist": [8, 9], "interfac": [8, 11], "nearli": 8, "stat": 8, "math": 8, "wrote": [8, 11], "onc": [8, 11], "best": [8, 9, 10, 11], "To": [8, 11], "thing": [8, 10, 11], "when": [8, 9, 10, 11], "against": 8, "well": [8, 10], "control": [8, 11], "its": [8, 9, 10, 11], "shape": [8, 10], "plai": [8, 11], "find": [8, 10, 11], "set": [8, 9, 11], "first": [9, 10, 11], "assign": 9, "ml": [9, 10, 11], "understand": 9, "emerg": 9, "room": 9, "level": 9, "everi": [9, 10, 11], "inflam": 9, "being": 9, "remain": 9, "night": 9, "carri": 9, "out": [9, 10, 11], "cannot": [9, 11], "singl": [9, 10, 11], "whose": [9, 10], "respons": 9, "inher": 9, "block": [9, 10, 11], "complex": 9, "spirit": 9, "scienc": 9, "solv": [9, 10, 11], "problem": [9, 11], "slightli": 9, "ones": [9, 11], "reason": [9, 10], "hone": 9, "minim": 9, "subset": 9, "n": [9, 10, 11], "particular": [9, 10], "On": 9, "countabl": 9, "though": [9, 11], "infti": 9, "ani": [9, 10, 11], "theoret": 9, "speak": 9, "map": 9, "unit": [9, 11], "interv": 9, "p": [9, 10], "rightarrow": 9, "p_n": 9, "dot": 9, "argument": [9, 10, 11], "told": 9, "10": [9, 10, 11], "notabl": 9, "sum": [9, 10, 11], "limits_": [9, 10, 11], "sai": [9, 11], "affect": [9, 10], "flip": [9, 10], "coin": 9, "land": 9, "head": 9, "doe": [9, 10, 11], "signifi": 9, "accord": 9, "p_r": 9, "equal": [9, 11], "brows": 9, "page": 9, "binomi": 9, "geometr": 9, "poisson": 9, "Then": 9, "everydai": 9, "life": 9, "explain": [9, 10, 11], "hint": [9, 11], "panel": 9, "summar": 9, "rest": 9, "choic": 9, "option": 9, "tail": 9, "p_h": 9, "leq": [9, 10], "indic": [9, 11], "averag": 9, "half": 9, "call": [9, 10, 11], "read": [9, 11], "store": [9, 11], "file": 9, "contain": [9, 10, 11], "sever": [9, 11], "uniqu": 9, "identifi": 9, "worri": 9, "de": 9, "anonym": 9, "back": [9, 10], "record": 9, "varieti": 9, "wa": [9, 10, 11], "becaus": [9, 10, 11], "doctor": 9, "try": [9, 10, 11], "after": [9, 10], "doesn": 9, "fanci": 9, "isn": 9, "perfect": 9, "requir": [9, 11], "few": [9, 11], "field": 9, "googl": [9, 11], "around": [9, 11], "appropri": 9, "value_count": 9, "sort": 9, "normal": [9, 11], "put": [9, 11], "name": 9, "y": [9, 10], "item": [9, 10], "list": [9, 10, 11], "choos": 9, "pleas": [9, 10, 11], "justifi": 9, "lack": 9, "kind": 9, "miss": 9, "would": [9, 10, 11], "recommend": [9, 10, 11], "jointli": 9, "up": [9, 10, 11], "evid": 9, "guid": 10, "multi": [10, 11], "loop": [10, 11], "yet": 10, "ourselv": 10, "acknowledg": [10, 11], "adapt": [10, 11], "wherea": 10, "slice": 10, "typic": 10, "extract": [10, 11], "contigu": 10, "chunk": 10, "subsect": [10, 11], "element": [10, 11], "belong": 10, "togeth": [10, 11], "origin": [10, 11], "easier": 10, "shown": 10, "than": [10, 11], "rememb": 10, "introductori": 10, "perform": [10, 11], "oper": 10, "return": [10, 11], "arang": [10, 11], "6": [10, 11], "7": [10, 11], "8": [10, 11], "9": [10, 11], "fals": [10, 11], "b": [10, 11], "easili": [10, 11], "veri": [10, 11], "complic": 10, "behavior": 10, "f": 10, "odd": 10, "implement": [10, 11], "def": [10, 11], "is_even": 10, "27": 10, "16": 10, "125": 10, "36": 10, "343": 10, "64": 10, "729": 10, "creat": [10, 11], "multipli": 10, "automat": [10, 11], "integ": 10, "wherev": 10, "becom": [10, 11], "otherwis": 10, "look": [10, 11], "while": [10, 11], "pedagog": 10, "logic": 10, "littl": [10, 11], "obfusc": 10, "cleaner": 10, "lastli": [10, 11], "interpret": 10, "row": [10, 11], "12": [10, 11], "reshap": [10, 11], "contains_number_divisible_by_5": 10, "divis": 10, "11": [10, 11], "posit": 10, "coordin": 10, "radiu": 10, "should": 10, "except": [10, 11], "within": 10, "j": [10, 11], "dtype": [10, 11], "int32": [10, 11], "similarli": [10, 11], "boolean_indexing_q1": 10, "pass": [10, 11], "boolean_indexing_q2": 10, "sometim": [10, 11], "25": 10, "49": 10, "81": 10, "100": 10, "121": 10, "recal": 10, "arrang": 10, "size": [10, 11], "whole": 10, "dimens": [10, 11], "tupl": [10, 11], "pair": 10, "squar": 10, "matrix": 10, "along": [10, 11], "diagon": 10, "13": [10, 11], "14": [10, 11], "exist": [10, 11], "sake": 10, "extend": [10, 11], "second": [10, 11], "keyword": [10, 11], "offset": 10, "built": [10, 11], "purpos": [10, 11], "yourself": [10, 11], "integer_indexing_q1": 10, "integer_indexing_q2": 10, "treat": 10, "dure": 10, "arithmet": [10, 11], "constraint": 10, "smaller": 10, "larger": 10, "compat": 10, "fast": [10, 11], "hood": [10, 11], "needless": 10, "copi": 10, "rule": 10, "input": [10, 11], "repeatedli": 10, "prepend": 10, "until": [10, 11], "act": 10, "had": 10, "largest": 10, "assum": 10, "repeat": 10, "0th": [10, 11], "ad": 10, "elementwis": [10, 11], "And": 10, "replac": 10, "power": [10, 11], "tool": 10, "surpris": 10, "happen": [10, 11], "subtract": 10, "There": [10, 11], "pairwis": 10, "great": 10, "trigger": 10, "unintention": 10, "hard": 10, "unequ": 10, "error": [10, 11], "desir": [10, 11], "section": 10, "accept": 10, "c_": 10, "b_": 10, "a_": 10, "broadcasting_q1": 10, "checkout": 10, "saw": [10, 11], "subtli": 10, "sneak": 10, "luckili": 10, "assert": 10, "rais": 10, "someth": [10, 11], "debug": 10, "whenev": [10, 11], "notin": 10, "went": 10, "wrong": 10, "speed": [10, 11], "process": [10, 11], "ensur": 10, "correct": 10, "fail": 10, "clue": 10, "remov": [10, 11], "output": [10, 11], "technic": [10, 11], "anyth": 10, "optim": 10, "special": 10, "thumb": 10, "rang": [10, 11], "length": [10, 11], "go": [10, 11], "split": 10, "lingo": 10, "rank": 10, "split_2d_arrai": 10, "assert_rank": 10, "partition_s": 10, "int": [10, 11], "part1": 10, "part2": 10, "assert_shap": 10, "insid": 10, "document": [10, 11], "simplic": 10, "concern": 10, "least": [10, 11], "numer": 11, "capabl": 11, "hardwar": 11, "gpu": 11, "commonli": 11, "train": 11, "main": 11, "interact": 11, "unlik": 11, "similar": 11, "offer": 11, "featur": 11, "effici": 11, "approxim": 11, "gradient": 11, "written": 11, "much": 11, "wonder": 11, "throughout": 11, "conveni": 11, "spend": 11, "less": 11, "wait": 11, "algorithm": 11, "shift": 11, "vanilla": 11, "slow": 11, "encourag": 11, "complet": 11, "knowledg": 11, "handi": 11, "heavi": 11, "reli": 11, "known": 11, "down": 11, "imit": 11, "popular": 11, "correspond": 11, "version": 11, "often": 11, "internet": 11, "resourc": 11, "newer": 11, "ok": 11, "moreov": 11, "caution": 11, "NOT": 11, "mix": 11, "vice": 11, "versa": 11, "THAT": 11, "throw": 11, "bug": 11, "difficult": 11, "One": 11, "keep": 11, "mistak": 11, "immut": 11, "alter": 11, "brand": 11, "index": 11, "arr": 11, "seem": 11, "realli": 11, "ineffici": 11, "constantli": 11, "burden": 11, "request": 11, "memori": 11, "actual": 11, "cover": 11, "awar": 11, "save": 11, "unsur": 11, "confus": 11, "jargon": 11, "gain": 11, "tinker": 11, "bit": 11, "small": 11, "area": 11, "ndim": 11, "type": 11, "array_of_int": 11, "array_of_float": 11, "float32": 11, "convert": 11, "astyp": 11, "regular": 11, "deduc": 11, "sequenc": 11, "array_from_list": 11, "zero": 11, "full": 11, "These": 11, "default": 11, "float64": 11, "via": 11, "array_of_zero": 11, "array_of_on": 11, "analog": 11, "linspac": 11, "increment": 11, "20": 11, "19": 11, "done": 11, "simpli": 11, "calcul": 11, "unsquees": 11, "squeez": 11, "pad": 11, "unsqueez": 11, "turn": 11, "concaten": 11, "th": 11, "a_unsqueez": 11, "none": 11, "b_unsqueez": 11, "a_and_b": 11, "meant": 11, "ellipsi": 11, "preserv": 11, "appli": 11, "fill": 11, "40": 11, "50": 11, "doubl": 11, "star": 11, "sin": 11, "35": 11, "29": 11, "38": 11, "47": 11, "129453": 11, "880316": 11, "4511313": 11, "6237485": 11, "80": 11, "150": 11, "wise": 11, "minimum": 11, "min": 11, "max": 11, "oftentim": 11, "column": 11, "18": 11, "21": 11, "ax": 11, "revers": 11, "rel": 11, "alwai": 11, "lot": 11, "interest": 11, "sure": 11, "link": 11, "own": 11, "log": 11, "tile": 11, "transpos": 11, "array_operations_q1": 11, "array_operations_q2": 11, "machineri": 11, "mathemat": 11, "5th": 11, "onward": 11, "2nd": 11, "6th": 11, "view": 11, "3th": 11, "1st": 11, "3rd": 11, "multipl": 11, "simultan": 11, "elipsi": 11, "earlier": 11, "illustr": 11, "k": 11, "l": 11, "alon": 11, "entri": 11, "array_slicing_q1": 11, "array_slicing_q2": 11}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"probabilist": [0, 4], "foundat": 0, "ml": [0, 4], "syllabu": 0, "schedul": 0, "cours": 0, "materi": 0, "introduct": [0, 11], "model": [0, 1, 5, 6], "specif": 0, "predict": [0, 6], "gener": 0, "infer": [0, 3], "direct": 1, "graphic": 1, "The": 2, "basic": 2, "frequentist": 2, "learn": [2, 7], "what": 4, "latent": 5, "variabl": 5, "lvm": 5, "condit": 7, "probabl": [7, 8, 9], "discret": [7, 9], "terminolog": [7, 9], "notat": [7, 9], "distribut": [7, 9], "hand": 7, "exercis": [7, 8, 9, 10, 11], "continu": 8, "practic": 8, "numpyro": 8, "get": 9, "familiar": 9, "us": 9, "match": 9, "scenario": 9, "advanc": 10, "vector": [10, 11], "jax": [10, 11], "index": 10, "boolean": 10, "arrai": [10, 11], "indic": 10, "broadcast": 10, "catch": 10, "bug": 10, "earli": 10, "chex": 10, "an": 11, "tip": 11, "advic": 11, "properti": 11, "creation": 11, "shape": 11, "manipul": 11, "oper": 11, "slice": 11}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})