# The Ethics of Generative Models in Sociotechnical Systems


**Contexts:** We can evaluate predictive models in terms of their prediction error, confusion matrices, etc. Moreover, we can begin to assess for discrimination by comparing these notions of predictive error across different subgroups in our data. Can we do the same for generative models?

**Challenge:** Generative models pose new challenges for evaluation. Log-likelihood allows us to compare different generative models, but how can we tell if a model's log-likelihood is sufficiently high for some downstream task? And how can we determine whether the generative model learned generates biased data (e.g. data that reinforces stereotypes)? 

**Outline:** 
* We'll start with a broader impact analysis of some case studies
* We'll look at some interdisciplinary approaches to assessing generative models



## Broader Impact Analysis

````{admonition} Exercise: Conduct a Broader Impact Analysis
Read one of the following:
* [Stable Bias: Evaluating Societal Representations in Diffusion Models](https://arxiv.org/pdf/2303.11408)
* (Trigger warning: model outputs that reinforce stereotypes). [Humans are Biased; Generative AI is Even Worse. Stable Diffusion’s text-to-image model amplifies stereotypes about race and gender---here's why that matters](https://www.bloomberg.com/graphics/2023-generative-ai-bias/)

Then answer these questions:
* Conduct a broader impact analysis of the technology described (text-to-image stable diffusion models).
* What did you find challenging about conducting this broader impact analysis?
````


## Assessing Generative Models

````{admonition} Exercise: Qualitative Approaches to Evaluating Generative AI
Read, ["I wouldn’t say offensive but...": Disability-Centered Perspectives on Large Language Models](https://dl.acm.org/doi/pdf/10.1145/3593013.3593989).
* What methodology did the authors use to assess the model? How did their approach differ from the purely metric-based approach from class?
* What does their methodology capture that cannot be captured via metric-based evaluation?
* Using this methodology, what did the authors learn?
````


