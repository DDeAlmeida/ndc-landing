import { useEffect } from "react";

const RedirectLinks = {
  "/wg": "https://near.social/#/neardigitalcollective.near/widget/NDCDocs_OneArticle?articleId=workgroups&blockHeight=94330352&lastEditor=blaze.near",
  "/docs": "https://near.social/#/neardigitalcollective.near/widget/NDCDocs",
  "/office-hours": "https://near.social/#/neardigitalcollective.near/widget/OfficeHours",
  "/funding": "https://near.social/#/frichard5.near/widget/NDC-alldaos_overview",
  "/poll": "https://near.org/easypoll-v0.ndc-widgets.near/widget/EasyPoll",
  "/twitter": "https://twitter.com/neardc",
  "/home": "https://app.neardc.org",
  "/devhub": "https://near.social/#/devgovgigs.near/widget/gigs-board.pages.community.activity?handle=ndc",
  "/og-application": "https://docs.google.com/forms/d/e/1FAIpQLSfQ80mza1ssDRuEkjTl61ty0ORxm23whmwBDlaxWHjodTiz-w/viewform",
  "/updates": "https://near.social/#/sayalot.near/widget/SayALot",
  "/brand": "https://drive.google.com/drive/folders/1AIg5DimA_Tlj0cGXAuZyJmGlBbc5UpvY?usp=sharing",
  "/gov-ops": "https://docs.google.com/document/d/14ppp0QoMUM5WklO5HJsn7cRltw7kDdsP1iAcEMJTRxE/edit?usp=sharing",
  "/gigs": "https://near.social/#/neardigitalcollective.near/widget/Gigs",
  "/gigs-kyc": "https://airtable.com/shrWyGUWWQFcNMrId",
  "/election-contract": "https://github.com/near-ndc/voting-v1/tree/master/elections/src",
  "/voting-contract": "",
  "/vote": "",
  "/nominate": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Page",
  "/verified-humans": "",
  "/trust": "",
  "/github": "https://github.com/near-ndc",
  "/tech": "https://t.me/+zm-lGZhkVcNjMjEx",
  "/refi": "https://NEAReFI.org/telegram",
  "/framework": "https://t.me/+U0ywDvAAgTljMTQx",
  "/ai": "https://t.me/+rO5rtl5zAnI1NTY5",
  "/kyc": "https://t.me/+EjANBtB0TYlmMzQx",
  "/rc": "https://t.me/+bSbtaui5HlUwYzUx",
  "/startup": "https://t.me/+YKOQc1O4XJxlYWM5",
  "/mods": "https://t.me/+RjIksh_d7OcwMmI1",
  "/transparency": "https://t.me/+f9k6zkvC8cVlNGNh",
  "/merit": "https://t.me/+fkHgIrbY_TtmMDZh",
  "/community-events": "https://t.me/+REBhhF3Voes5NDhh",
  "/events": "https://t.me/+REBhhF3Voes5NDhh",
  "/gaming": "https://t.me/+QM6OtCRhcUdiYjhh",
  "/nft": "https://t.me/+i3GC2WYx5b5hMThh",
  "/defi": "https://t.me/+50ySHiGjLn04M2Rh",
  "/degen": "https://t.me/+KCCfcYe-IKI2ZjEx",
  "/freelancer": "https://t.me/+wqRNryKvg3AwMDdk",
  "/telegram": "https://t.me/+fcNhYGxK891lMjMx",
  "/discord": "https://discord.gg/4EZ6tW5Ctx",
  "/og-apply": "https://docs.google.com/forms/d/e/1FAIpQLSfQ80mza1ssDRuEkjTl61ty0ORxm23whmwBDlaxWHjodTiz-w/viewform",
  "/jobs": "https://careers.near.org/companies/near-digital-collective-ndc?q=ndc#content",
  "/leaderboard": "https://i-am-human.app/community-scoreboard",
  "/e2e-nominate": "https://docs.google.com/spreadsheets/d/1euTAtVGLB-3fnqp-VE5yI70l3Yb4ebqycqn_qV9qmSY/edit#gid=1640210743",
  "/wg-combinator": "https://docs.google.com/document/d/1dLZiEUwFUSgYprJeJ-UzHCtp00ml-Sz9bLCDWWVhhi0/edit?usp=sharing",
  "/sbt-viewer-figma": "https://www.figma.com/file/DYD5EQyzJD2Aj1NMN2g47E/NDC-SBT-Inspiration?type=design&node-id=0%3A1&mode=design&t=NxtqzXHmW5lpTi5D-1",
  "/wg-directory-figma": "https://www.figma.com/file/LxPBkTAfRF8qXC0gnQwLfA/NDC-WG-Directory-Inspiration?type=design&node-id=0%3A1&mode=design&t=5wrOxGvuQciPqZQg-1",
  "/sbt-minter-figma": "https://www.figma.com/file/A7RpkKAKFY7CQMbE7qcxFE/NDC-SBT-Minter-Inspiration?type=design&node-id=0%3A1&mode=design&t=H3p2Q7r8088wrudh-1",
  "/e2e-nominate-instructions": "https://docs.google.com/document/d/1nRi0B9vPvOgS4STxhStMF3mOT2CkDwoO-aGoGYa_mF0/edit?usp=sharing",
  "/declaration-of-transparency": "https://bafkreiarbw2noibmrvb2zexgsgbff23lhe5dzwjdepglsad3rp6fhvbhua.ipfs.nftstorage.link/",
  "/testing-apply": "https://airtable.com/shrg5UxcE8VXLon4n",
  "/human": "https://i-am-human.app/",
  "/blog": "https://medium.com/@neardigitalcollective",
  "/medium": "https://medium.com/@neardigitalcollective",
  "/gigs-process": " https://miro.com/app/board/uXjVMMaCkmk=/",
"/product-feedback": "https://near-digital-collective.canny.io/bugs-and-feature-requests",
"/bounty-request": "https://airtable.com/shrQKlzVFjxEAqtSK",
"/gig-rebrand" : "",
"/gig-sbt-viewer" : "",
"/gig-fund-design": "https://near.social/#/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=community-fund&blockHeight=97329080&lastEditor=ndcplug.near",
"/gig-office-hours" : "",
"/gig-user-activity" : "",
"/gig-home-page": "https://near.social/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=ndc-home-page&blockHeight=98060420&lastEditor=ndcplug.near",
"/gig-contributors" : "",
"/gig-fast-sbt": "https://near.social/#/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=fast-sbt&blockHeight=96841379&lastEditor=ndcplug.near",
"/gig-wg-directory" : "https://near.social/#/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=wg-directory&blockHeight=96785133&lastEditor=ndcplug.near",
"/gig-vote-bot" : "https://near.social/#/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=gotv-bot&blockHeight=96301933&lastEditor=ndcplug.near",
"/gig-wg-page": "",
"/gig-nomination-bot": "https://near.social/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=nomination-bot&blockHeight=98435325&lastEditor=ndcplug.near",
"/gig-nominate-bot": "https://near.social/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=nomination-bot&blockHeight=98435325&lastEditor=ndcplug.near",
"/gig-bluecheck": "",
"/election": "https://near.org/election.ndctools.near/widget/NDC.Elections.Main",
"/OGs": "https://near.social/#/zavodil.near/widget/ndc-og-holders",
"/sbt-holders": "https://near.org/ndcplug.near/widget/NDC.SBT.main",
"/gig-rebrand-docs": "https://near.social/#/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=docs-rebrand&blockHeight=96782592&lastEditor=ndcplug.near",
"/gig-rebrand-sayalot": "https://near.social/#/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=say-a-lot-rebrand&blockHeight=96782610&lastEditor=ndcplug.near",
"/og-social": "https://www.near.org/near/widget/ProfilePage?accountId=og-sbt.sputnik-dao.near",
"/og-dao": "https://near.org/sking.near/widget/DAO.Page?daoId=og-sbt.sputnik-dao.near&tab=proposal",
"/nominate-template": "https://docs.google.com/document/d/1K79ee3PxA-MnXgRBc8RDkyPxwPu4nif2gj4D--f31Zg/edit",
"/nominate-instructions": "https://docs.google.com/document/d/1K79ee3PxA-MnXgRBc8RDkyPxwPu4nif2gj4D--f31Zg/edit",
"/gov-framework": "https://www.notion.so/near-ndc/NDC-V1-Framework-V3-Updated-1af84fe7cc204087be70ea7ffee4d23f?pvs=4",
"/gov-ops": "https://docs.google.com/document/d/1l5g7JhaEPUMzjrzXEKw2Za5UmuRyK_9qxj-2-2CxlOE/edit#heading=h.xbfrobqp6dx3",
"/constitution": "https://github.com/near-ndc/gov/blob/main/framework-v1/constitution.md",
"/conduct": "https://near.org/neardigitalcollective.near/widget/NDCDocs_OneArticle?articleId=CommunityGuidelines&blockHeight=91522833&lastEditor=neardigitalcollective.near",
"/bounty-process": "https://miro.com/app/board/uXjVMMaCkmk=/",
"/rc-investigation": "https://courageous-camelotia-2ec.notion.site/RC-DAO-Investigation-00ed9f8d80b440bfb6f6fb06af51ca90#16df22ba9d344420867e61337170b948",
"/whistleblow": "https://medium.com/@neardigitalcollective/introducing-ndc-whistleblower-bounty-program-d4fe1b9fc5a0",
"/kudos": "https://near.org/kudos.ndctools.near/widget/NDC.Kudos.Main",
"/human-form": "https://forms.gle/1SoT7d9924xXYTvA8",
"/nearui": "https://near.org/nearui.near/widget/index",
"/ndc-style": "https://near.org/rubycop.near/widget/NDC.StyledComponents",
"/fund-specs": "https://docs.google.com/document/u/2/d/1c8NsTPe9BCqHwwCDQxthFUXUg5l3ejoVy6i8_3Tj7bA/edit",
"/vote-plug": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=ndcplug.near",
"/vote-muse": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=nftmuse.near",
"/vote-ant": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=antmarshall360.near",
"/vote-cameron": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=cameron.near",
"/vote-chef": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=chefsale.near",
"/vote-sandi": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=chefsale.near",
"/vote-alan": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=alan777.near",
"/vote-russ": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=ogruss.near",
"/vote-vadim": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=vadim.near",
"/vote-louis": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=louisliu.near",
"/vote-lucio": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=luciotato.near",
"/vote-credit": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=cryptocredit.near",
"/vote-dk": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=dk_51.near",
"/vote-don": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=donni.near",
"/vote-kenny": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=kennyj.near",
"/vote-klint": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=klint.near",
"/vote-sg": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=guaschingmachines.near",
"/vote-kemal": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=kemo.near",
"/vote-wiz": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=wizzow.near",
"/vote-kiskesis": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=kiskesis.near",
"/vote-max": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=maxkott.near",
"/vote-planeta": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=planetaworld.near",
"/vote-haenko": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=haenko.near",
"/vote-igboze": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=igboze_builder.near",
"/vote-dede": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=dedeukwu.near",
"/vote-earnest": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=earnestetim.near",
"/vote-vandal": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=vandal.near",
"/vote-fritz": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=fritzwagner.near",
"/vote-chloe": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=chloe.near",
"/vote-hero": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=achildhoodhero.near",
"/vote-respect": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=reespect.near",
"/vote-marieke": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=marieke.near",
"/vote-aman": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=iamanansari.near",
"/vote-solomon": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=alphaflexhub.near",
"/vote-vianft": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=vianftbrasil.near",
"/vote-techdir": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=techdir.near",
"/vote-evangel": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=evangel.near",
"/vote-blaze": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=blaze.near",
"/vote-gagdiez": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=gagdiez.near",
"/vote-jose": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=jloc.near",
"/vote-ankit": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=flame1.near",
"/vote-jordan": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=kwhyc.near",
"/vote-marieke": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=marieke.near",
"/vote-johanga": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=johanga108.near",
"/vote-didier": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=pironi.near",
"/vote-yonota": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=yonota.near",
"/vote-anderson": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=andersonr.near",
"/vote-gustavo": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=manutegus.near",
"/vote-mohaa": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=mohaa.near",
"/vote-yg": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=yashank.near",
"/vote-notredame": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=maks1mk_a.near",
"/vote-rahul": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=rahulgoel.near",
"/vote-tolmindev": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=tolmindev.near",
"/vote-zubair": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=izubair.near",
"/vote-sheldon": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=cryptois.near",
"/vote-ulises": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=ramgor.near",
"/vote-crans": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=crans.near",
"/vote-dabbie": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=dabbie3229.near",
"/vote-raptor": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=kriptoraptor.near",
"/vote-brando": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=kangaroojack.near",
"/vote-odin": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=odins_eyehole.near",
"/vote-ugx": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=ugxnear.near",
"/vote-joe":"https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=joespano.near",
"/vote-robert": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=robert.near",
"/vote-vlad": "https://near.social/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=vlad.near",
"/nomination-leaderboard": "https://near.org/vadim.near/widget/nominations",
"/vote-vikash": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=vikash.near",
"/HoM": "https://near.social/neardigitalcollective.near/widget/NDCDocs_OneArticle?articleId=House_of_Merit-Overview&blockHeight=99009616&lastEditor=neardigitalcollective.near",
"/HouseOfMerit": "https://near.social/neardigitalcollective.near/widget/NDCDocs_OneArticle?articleId=House_of_Merit-Overview&blockHeight=99009616&lastEditor=neardigitalcollective.near",
"/TC": "https://near.social/neardigitalcollective.near/widget/NDCDocs_OneArticle?articleId=Transparency_Commission-Overview&blockHeight=99011054&lastEditor=neardigitalcollective.near",
"/TransparencyComission": "https://near.social/neardigitalcollective.near/widget/NDCDocs_OneArticle?articleId=Transparency_Commission-Overview&blockHeight=99011054&lastEditor=neardigitalcollective.near",
"/CoA": "https://near.social/neardigitalcollective.near/widget/NDCDocs_OneArticle?articleId=Council_of_Advisors-Overview&blockHeight=99010425&lastEditor=neardigitalcollective.near",
"/CouncilOfAdvisors": "https://near.social/neardigitalcollective.near/widget/NDCDocs_OneArticle?articleId=Council_of_Advisors-Overview&blockHeight=99010425&lastEditor=neardigitalcollective.near",
"/vote-guy": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=ntare.near",
"/vote-bowen": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=woben.near",
"/vote-alex": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=keyokey.near",
"/vote-jane": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=jlw.near",
"/vote-riley": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=rileytran.near",
"/vote-jeff": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=jgold.near",
"/vote-yessin": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=yesn.near",
"/vote-peter": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=p3ter.near",
"/vote-matt": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=mattlock.near",
"/vote-sasha": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=ahsas.near",
"/vote-as": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=as.near",
"/vote-kaz": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=kazanderdad.near",
"/vote-jared": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=jarednotjerry.near",
"/vote-muse": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=nftmuse.near",
"/vote-frado": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=frado.near",
"/vote-sahil": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=sahilmassey.near",
"/vote-sal": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=salikc9.near",
"/vote-andrii": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=rubycop.near",
"/vote-tiffany": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=tiffany.near",
'/vote-aescobar': "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=escobarindo.near",
"/vote-blessed": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=blessedchidi.near",
"/vote-gustavo": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=manutegus.near",
"/vote-gem": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=danieldao.near",
"/vote-ilya": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=ilerik.near",
"/vote-amos": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=nearkat.near",
"/vote-luka": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=983dcdc8e0d80d1f8938118161e1ec08be6557809afccd5ec396354f28a2ce78",
"/vote-wax": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=yourdad.near",
"/vote-william": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=williamxx.near",
"/vote-rekt": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=rektdegen.near",
"/vote-avb": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=alejandro.near",
"/vote-alexander": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=aurorafinance1.near",
"/vote-rezha": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=arezhas.near",
"/vote-mister": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=masterofcode.near",
"/vote-igor": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=iamgalt.near",
"/vote-frol": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=CouncilOfAdvisors&accountId=frol.near",
"/vote-dani": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=TransparencyCommission&accountId=waverlymaven.near",
"/vote-maxwell": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Candidate.Page?house=HouseOfMerit&accountId=bearmans.near",
"/who-voted": "https://near.social/vadim.near/widget/elections",
"/pikespeak": "https://pikespeak.ai/ndc-election",
"/election-results": "https://near.social/ndcplug.near/widget/NDC.Election.Votes",
"/election-stats": "https://near.social/marior.near/widget/NDCElections",

};

const Redirect = () => {
  useEffect(() => {
    const url = RedirectLinks[window.location.pathname.toLowerCase()];
    if (url) {
      window.location.href = url;
    } else {
      window.location.href = "/";
    }
  }, []);

  return <></>;
};
export default Redirect;
