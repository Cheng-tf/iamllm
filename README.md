# Tengfei Cheng — Academic Homepage

An English academic homepage adapted directly from [Jun CEN's template](https://github.com/Jun-CEN/Jun-CEN.github.io), using the original `main.css`, cover layout, profile card, timeline, and publication structure. `styles.css` contains responsive and accessibility fixes. The template credits Zeqing Yuan; that attribution is retained in the footer.

## Local preview

Run `python -m http.server 8000` and open http://localhost:8000. No build or package installation is needed.

## Content

- `index.html`: biography, research experience, publications, projects, and awards.
- `main.css`: original Jun CEN template stylesheet (upstream commit `762c5381bc7e67dcdd8bae726be7c83a21ca4e80`).
- `styles.css`: local responsive and accessibility adjustments.
- `main.js`: mobile navigation, publication filtering, and back-to-top control.
- `images/dramaagent-main.png`: Figure 2 from DramaAgent, retrieved from the authors' project page and verified against the published PDF.

Publications appear in this order: VaseVQA; tidal current forecasting; DramaAgent; MDoom. The Shanghai Jiao Tong University RA dates are June–September 2026, with advisors Ying Wen and Yang Li. Education retains the expected completion date from the supplied personal information.

## Publication sources

- Tidal forecasting journal article: https://doi.org/10.1016/j.epsr.2026.113398 — published title: “A multi-periodicity learning model for tidal current speed forecasting”, Electric Power Systems Research 261, 113398 (2026).
- DramaAgent paper: https://aclanthology.org/2026.aacl-long.163/
- DramaAgent Figure 2: https://aigeeksgroup.github.io/DramaAgent/show11-1.png

## GitHub Pages

The homepage uses a `robots` meta tag with `noindex, nofollow, noimageindex` to request exclusion from search engines while keeping direct links accessible. This is not authentication or a guarantee of privacy. Search engines must recrawl the page to see this instruction; the public GitHub repository and separately hosted assets may still be discoverable. Do not add a robots.txt crawl block, because crawlers need to fetch the page to read `noindex`.

To host this repository with GitHub Pages, select `main` and `/ (root)` in Settings → Pages if your account supports Pages for this repository. The expected project URL is `https://cheng-tf.github.io/iamllm/`. No custom domain is configured.

## Template attribution

Template and banner source: https://github.com/Jun-CEN/Jun-CEN.github.io (original styling credit: https://leoyuan.site/). The original template stylesheet is retained as a separate file. Existing personal website assets and repository license are retained. No visitor analytics or third-party tracking scripts are loaded by the homepage.
