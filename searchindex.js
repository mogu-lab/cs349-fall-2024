Search.setIndex({"docnames": ["index", "lectures/directed-graphical-models", "lectures/frequentist-learning", "lectures/introduction", "lectures/probability"], "filenames": ["index.md", "lectures/directed-graphical-models.ipynb", "lectures/frequentist-learning.ipynb", "lectures/introduction.ipynb", "lectures/probability.ipynb"], "titles": ["Probabilistic Foundations of Machine Learning", "<span class=\"section-number\">1. </span>Directed Graphical Models", "<span class=\"section-number\">3. </span>The Basics of Frequentist Learning", "<span class=\"section-number\">1. </span>What is Probabilistic ML?", "<span class=\"section-number\">2. </span>Introduction to Probability"], "terms": {"thi": 0, "book": 0, "current": [0, 3], "under": [0, 3], "construct": 0, "instructor": 0, "yaniv": 0, "yacobi": 0, "semest": 0, "fall": 0, "2024": 0, "cours": 0, "number": [0, 3], "cs": [0, 3], "349": 0, "descript": [0, 3], "In": 0, "recent": 0, "year": [0, 3], "artifici": 0, "intellig": 0, "ha": [0, 3], "enabl": 0, "applic": [0, 3], "were": [0, 3], "previous": 0, "thought": 0, "possibl": 0, "from": [0, 1, 4], "system": 0, "propos": [0, 3], "novel": [0, 3], "drug": 0, "gener": [0, 3], "new": [0, 3], "art": 0, "music": 0, "accur": 0, "reliabl": [0, 3], "predict": 0, "outcom": [0, 3], "medic": [0, 3], "intervent": 0, "real": [0, 3], "time": [0, 3], "But": [0, 3], "what": [0, 1, 4], "develop": 0, "paradigm": [0, 3], "cast": 0, "advanc": [0, 3], "like": [0, 3], "neural": [0, 3], "network": [0, 3], "statist": 0, "framework": 0, "we": 0, "introduc": 0, "concept": [0, 3], "behind": 0, "infer": 0, "focus": [0, 1, 2, 4], "connect": [0, 3], "theori": [0, 3], "world": 0, "hand": 0, "practic": [0, 2], "lai": 0, "studi": [0, 3], "research": [0, 3], "topic": [0, 1, 2, 4], "includ": [0, 3], "direct": 0, "graphic": 0, "deep": [0, 3], "bayesian": 0, "regress": [0, 1], "classif": [0, 3], "latent": 0, "variabl": [0, 1, 2, 3, 4], "cluster": 0, "dimension": 0, "reduct": [0, 3], "seri": 0, "forecast": 0, "student": [0, 3], "get": 0, "experi": [0, 3], "build": [0, 3], "task": [0, 3], "most": [0, 3], "taken": 0, "healthcar": 0, "context": 0, "us": [0, 1, 2, 3, 4], "program": [0, 3], "languag": 0, "base": 0, "python": [0, 3], "todo": 0, "ml": 0, "probabl": 0, "The": 0, "basic": 0, "frequentist": 0, "two": [1, 3], "notat": [1, 2, 4], "re": [1, 3], "write": [1, 2], "all": [1, 3], "previou": 1, "week": [1, 3], "dgm": 1, "specifi": 1, "condit": 1, "depend": 1, "focu": [1, 3], "linear": 1, "familiar": [1, 3, 4], "common": [1, 4], "structur": 1, "ask": 1, "them": [1, 4], "match": 1, "which": [1, 3, 4], "good": [1, 3], "numpyro": [1, 2, 4], "s": 1, "auto": 1, "diff": 1, "fit": 1, "everyth": 1, "outlin": [1, 2, 4], "onli": [2, 3, 4], "one": [2, 3, 4], "maximum": [2, 3], "likelihood": 2, "estim": [2, 3], "analyt": [2, 3], "introduct": 2, "make": [2, 3], "model": 2, "sampl": [2, 3, 4], "distribut": [2, 3, 4], "determinist": 2, "paramet": [2, 3], "avoid": 2, "plate": 2, "helper": 2, "function": [2, 3], "both": [2, 3], "univari": 2, "multivari": [2, 3], "ipython": 3, "displai": 3, "import": 3, "html": 3, "scatter": 3, "plot": 3, "home": 3, "price": 3, "vs": 3, "footag": 3, "some": 3, "southern": 3, "california": 3, "can": 3, "see": 3, "ani": 3, "trend": 3, "increas": 3, "precis": 3, "mathemat": 3, "relationship": 3, "captur": 3, "hypothes": 3, "valu": 3, "group": 3, "attribut": 3, "anoth": 3, "call": 3, "try": 3, "e": 3, "g": 3, "target": 3, "denot": 3, "y": 3, "covari": 3, "x": 3, "f": 3, "our": 3, "hat": 3, "conjectur": 3, "line": 3, "w_1x": 3, "w_0": 3, "best": 3, "an": 3, "absolut": 3, "residu": 3, "differ": 3, "between": 3, "actual": 3, "given": 3, "mathtt": 3, "_n": 3, "y_n": 3, "max": 3, "deviat": 3, "count": 3, "biggest": 3, "max_n": 3, "sum": 3, "add": 3, "up": 3, "sum_n": 3, "2": 3, "also": 3, "averag": 3, "frac": 3, "1": [3, 4], "n": 3, "sum_": 3, "again": 3, "observ": 3, "question": 3, "choos": 3, "process": 3, "metric": 3, "loss": 3, "train": 3, "object": 3, "mathcal": 3, "l": 3, "w_1": 3, "w_1x_n": 3, "quad": 3, "text": 3, "set": 3, "find": 3, "coeffici": 3, "minim": 3, "underset": 3, "mathrm": 3, "argmin": 3, "method": 3, "note": 3, "cannot": 3, "everi": 3, "linearregress": 3, "librari": 3, "linear_model": 3, "instanc": 3, "x_train": 3, "y_train": 3, "perhap": 3, "choic": 3, "less": 3, "arbitrari": 3, "believ": 3, "aris": 3, "belief": 3, "theoret": 3, "life": 3, "due": 3, "unpredict": 3, "circumst": 3, "random": [3, 4], "amount": 3, "epsilon": 3, "nois": 3, "sim": 3, "p": 3, "explicitli": 3, "account": 3, "let": 3, "assum": 3, "underli": 3, "independ": 3, "0": 3, "overset": 3, "iid": 3, "natur": 3, "wai": 3, "well": 3, "check": 3, "comput": 3, "prod_": 3, "x_n": 3, "suppos": 3, "3x": 3, "10": 3, "3": 3, "002": 3, "better": 3, "exampl": 3, "maxim": 3, "argmax": 3, "_": 3, "maximim": 3, "equival": 3, "equiv": 3, "y_i": 3, "w_1x_1": 3, "hint": 3, "np": 3, "sqrt": 3, "pi": 3, "exp": 3, "left": 3, "right": 3, "log": 3, "after": 3, "give": 3, "advantag": 3, "addit": 3, "test": 3, "must": 3, "examin": 3, "themselv": 3, "incorpor": 3, "prior": 3, "obtain": 3, "measur": 3, "begin": 3, "align": 3, "end": 3, "where": 3, "w_i": 3, "mai": 3, "express": 3, "non": [3, 4], "too": 3, "larg": 3, "bay": 3, "rule": 3, "over": 3, "x_1": 3, "y_1": 3, "ldot": 3, "propto": 3, "underbrac": 3, "param": 3, "distirbut": 3, "poseterior": 3, "pair": 3, "score": 3, "posterior": 3, "influenc": 3, "normal": 3, "5": 3, "mu": 3, "sigma": 3, "deriv": 3, "close": 3, "form": 3, "solut": 3, "main": 3, "approach": 3, "rather": 3, "singl": 3, "plausibl": 3, "being": 3, "other": 3, "spread": 3, "wide": 3, "mani": 3, "veri": 3, "equal": 3, "high": 3, "narrow": 3, "look": 3, "similar": 3, "low": 3, "sens": 3, "typic": 3, "randomli": 3, "point": 3, "each": 3, "mle": 3, "bootstrap": 3, "hw": 3, "compar": 3, "those": 3, "correct": 3, "assumpt": 3, "critic": 3, "state": 3, "goal": 3, "mse": 3, "easi": 3, "optim": 3, "often": 3, "especi": 3, "complex": 3, "repres": 3, "If": 3, "interest": 3, "case": 3, "requir": 3, "sophist": 3, "algorithm": 3, "understand": 3, "mention": 3, "These": 3, "properti": [3, 4], "appli": 3, "safeti": 3, "risk": 3, "advers": 3, "domain": 3, "health": 3, "care": 3, "financi": 3, "crimin": 3, "justic": 3, "crucial": 3, "its": 3, "down": 3, "stream": 3, "sourc": 3, "inform": 3, "epistem": 3, "small": 3, "across": 3, "scenario": 3, "reduc": 3, "aleator": 3, "level": 3, "irreduc": 3, "effici": 3, "out": 3, "detect": 3, "digit": 3, "patholog": 3, "multi": 3, "head": 3, "convolut": 3, "linman": 3, "et": 3, "al": 3, "imag": 3, "2020": 3, "author": 3, "awar": 3, "breast": 3, "cancer": 3, "metastasi": 3, "dure": 3, "type": 3, "tissu": 3, "defer": 3, "unfamiliar": 3, "caught": 3, "auc": 3, "98": 3, "order": 3, "maker": 3, "meaningfulli": 3, "explan": 3, "difficult": 3, "acut": 3, "intracrani": 3, "haemorrhag": 3, "dataset": 3, "lee": 3, "biomed": 3, "engin": 3, "2019": 3, "ich": 3, "classifi": 3, "five": 3, "subtyp": 3, "highlight": 3, "pixel": 3, "contribut": 3, "highligth": 3, "region": 3, "tend": 3, "overlap": 3, "bleed": 3, "annot": 3, "neuroradiologist": 3, "pure": 3, "feat": 3, "tech": 3, "user": 3, "your": 3, "cog": 3, "technic": 3, "intend": 3, "just": 3, "actor": 3, "web": 3, "stakehold": 3, "worri": 3, "perform": 3, "combin": 3, "consist": 3, "expert": 3, "mozannar": 3, "intern": 3, "confer": 3, "decid": 3, "input": 3, "joint": 3, "superior": 3, "recommend": 3, "clinician": 3, "treatment": 3, "select": 3, "antidepress": 3, "jacob": 3, "translat": 3, "psychiatri": 3, "2021": 3, "found": 3, "incorrect": 3, "simpl": 3, "experienc": 3, "signific": 3, "insuffici": 3, "address": 3, "overreli": 3, "imperfect": 3, "artifci": 3, "intelleg": 3, "becom": 3, "increasinglli": 3, "ubiquit": 3, "modern": 3, "alreadi": 3, "made": 3, "meaning": 3, "press": 3, "face": 3, "todai": 3, "bia": 3, "math": 3, "peopl": 3, "neglect": 3, "dimens": 3, "inextric": 3, "link": 3, "divers": 3, "represent": 3, "movement": 3, "awai": 3, "tradit": 3, "methodolog": 3, "abstract": 3, "increasingli": 3, "field": 3, "grappl": 3, "role": 3, "plai": 3, "entir": 3, "socio": 3, "scienc": 3, "interdisciplinari": 3, "skill": 3, "background": 3, "cooper": 3, "There": 3, "engag": 3, "econom": 3, "polit": 3, "cultur": 3, "ethic": 3, "embed": 3, "institut": 3, "continu": 3, "ordin": 3, "categor": [3, 4], "critiqu": 3, "fail": 3, "produc": 3, "unintend": 3, "standard": 3, "techniqu": 3, "At": 3, "should": 3, "abl": 3, "product": 3, "read": 3, "paper": 3, "anticip": 3, "failur": 3, "mode": 3, "nuanc": 3, "analys": 3, "broader": 3, "serv": 3, "concret": 3, "purpos": 3, "emphas": 3, "aspect": 3, "relat": 3, "stat": 3, "person": 3, "who": 3, "attend": 3, "except": 3, "via": 3, "zoom": 3, "togeth": 3, "room": 3, "creat": 3, "ifram": 3, "width": 3, "560": 3, "height": 3, "315": 3, "src": 3, "http": 3, "www": 3, "youtub": 3, "com": 3, "emb": 3, "dqg6": 3, "ehe39w": 3, "rel": 3, "amp": 3, "control": 3, "showinfo": 3, "framebord": 3, "allowfullscreen": 3, "opt": 3, "hostedtoolcach": 3, "13": 3, "x64": 3, "lib": 3, "python3": 3, "site": 3, "packag": 3, "core": 3, "py": 3, "431": 3, "userwarn": 3, "consid": 3, "instead": 3, "warn": 3, "homework": 3, "jupyt": 3, "notebook": 3, "option": 3, "download": 3, "latest": 3, "anaconda": 3, "deepnot": 3, "free": 3, "cloud": 3, "servic": 3, "come": 3, "pre": 3, "instal": 3, "tool": 3, "built": 3, "open": 3, "allow": 3, "share": 3, "document": 3, "contain": 3, "live": 3, "code": [3, 4], "equat": 3, "visual": [3, 4], "narr": 3, "duplic": 3, "starter": 3, "workspac": 3, "turn": 3, "anyon": 3, "view": 3, "submit": 3, "canva": 3, "quizz": 3, "follow": 3, "lectur": 3, "video": 3, "9": 3, "weight": 3, "weekli": 3, "project": 3, "proof": 3, "implement": 3, "involv": 3, "approv": 3, "tutori": 3, "demonstr": 3, "unread": 3, "format": 3, "syntact": 3, "runtim": 3, "errror": 3, "answer": 3, "without": 3, "brief": 3, "justif": 3, "receiv": 3, "full": 3, "drop": 3, "lowest": 3, "late": 3, "three": 3, "dai": 3, "outsid": 3, "submiss": 3, "accept": 3, "collabor": 3, "strongli": 3, "encourag": 3, "copi": 3, "strictli": 3, "syllabu": 3, "waiver": 3, "contact": 3, "weiwei": 3, "pan": 3, "haoxu": 3, "fan": 3, "cembalest": 3, "elain": 3, "cunha": 3, "felip": 3, "gomez": 3, "david": 3, "asseraf": 3, "sean": 3, "gao": 3, "clair": 3, "tseng": 3, "ma": 3, "jiayu": 3, "yao": 3, "comment": 3, "appropri": 3, "post": 3, "oh": 3, "consolid": 3, "thei": 3, "specif": 3, "session": 3, "lower": 3, "prioriti": 3, "mondai": 3, "start": 3, "priorit": 3, "troubl": 3, "shoot": 3, "progress": 3, "saturdai": 3, "setup": 3, "sundai": 3, "tuesdai": 3, "wednesdai": 3, "provid": 3, "support": 3, "materi": 3, "while": 3, "welcom": 3, "bring": 3, "total": 3, "suggest": 3, "workflow": 3, "fridai": 3, "clarifi": 3, "cover": 3, "issu": 3, "wednsdai": 3, "discuss": 3, "facili": 3, "amongst": 3, "moder": 3, "respons": 3, "schedul": 3, "last": 3, "remot": 3, "fundament": 3, "becaus": 3, "univers": 3, "kept": 3, "doubl": 3, "section": 3, "keep": 3, "enorl": 3, "flip": 3, "classroom": 3, "activ": 3, "put": 3, "success": 3, "thing": 3, "obviou": 3, "fact": 3, "trivial": 3, "don": 3, "t": 3, "shyness": 3, "intimid": 3, "prevent": 3, "someth": 3, "dig": 3, "deeper": 3, "settl": 3, "know": 3, "alwai": 3, "show": 3, "synthes": 3, "memor": 3, "sinc": 3, "tradition": 3, "term": 3, "teammat": 3, "same": 3, "outlook": 3, "expertis": 3, "challeng": 3, "dark": 3, "yourself": 3, "lost": 3, "someon": 3, "els": 3, "seem": 3, "take": 3, "lead": 3, "back": 3, "seat": 3, "interrog": 3, "valid": 3, "disagre": 3, "solicit": 3, "everyon": 3, "opinion": 3, "sai": 3, "suspend": 3, "own": 3, "skeptic": 3, "reconcil": 3, "definit": 4, "space": 4, "event": 4, "axiom": 4, "neg": 4, "uniform": 4, "gaussian": 4, "bernoulli": 4, "beta": 4, "dirichlet": 4, "jax": 4, "matplotlib": 4}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"probabilist": [0, 3], "foundat": 0, "machin": [0, 3], "learn": [0, 2, 3], "syllabu": 0, "schedul": 0, "lectur": 0, "note": 0, "introduct": [0, 4], "model": [0, 1, 3], "specif": 0, "direct": 1, "graphic": 1, "The": [2, 3], "basic": 2, "frequentist": [2, 3], "what": 3, "ml": 3, "outlin": 3, "thi": 3, "cours": 3, "about": 3, "how": 3, "do": 3, "we": 3, "pattern": 3, "data": 3, "A": 3, "notion": 3, "error": 3, "quantifi": 3, "overal": 3, "fit": 3, "linear": 3, "regress": 3, "sklearn": 3, "statist": 3, "maximimum": 3, "likelihood": 3, "minimum": 3, "mean": 3, "squar": 3, "evalu": 3, "interpret": 3, "bayesian": 3, "infer": 3, "versu": 3, "uncertainti": 3, "why": 3, "hard": 3, "Is": 3, "accuraci": 3, "enough": 3, "kind": 3, "predict": 3, "want": 3, "so": 3, "now": 3, "you": 3, "have": 3, "ar": 3, "gonna": 3, "With": 3, "them": 3, "explain": 3, "decis": 3, "commun": 3, "And": 3, "doe": 3, "It": 3, "matter": 3, "interact": 3, "need": 3, "think": 3, "when": 3, "design": 3, "promis": 3, "human": 3, "ai": 3, "system": 3, "peril": 3, "potenti": 3, "social": 3, "benifit": 3, "neg": 3, "impact": 3, "happen": 3, "altern": 3, "problem": 3, "solv": 3, "framework": 3, "much": 3, "more": 3, "than": 3, "am207": 3, "technolog": 3, "class": 3, "For": 3, "meet": 3, "gather": 3, "town": 3, "s": 3, "virtual": 3, "environ": 3, "complet": 3, "assign": 3, "In": 3, "exercis": 3, "structur": 3, "grade": 3, "compon": 3, "polici": 3, "i": 3, "get": 3, "help": 3, "teach": 3, "staff": 3, "tf": 3, "offic": 3, "hour": 3, "instructor": 3, "piazza": 3, "final": 3, "word": 3, "advic": 3, "ve": 3, "chang": 3, "ask": 3, "from": 3, "work": 3, "team": 3, "probabl": 4}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})