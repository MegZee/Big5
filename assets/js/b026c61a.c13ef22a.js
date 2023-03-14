"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6743],{352:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var i=n(9375),a=n(8933),r=(n(1987),n(4127)),o=n(4093),s=n(2590),u=["components"],l={sidebar_position:3},c="Check worker quality with Screening Units",d={unversionedId:"guides/how_to_use/worker_quality/using_screen_units",id:"guides/how_to_use/worker_quality/using_screen_units",title:"Check worker quality with Screening Units",description:"Screening units help filter out low-quality work, generally by hiding parts of the validation you're paying attention to behind the Mephisto server. To support this we provide the ScreenTaskRequired blueprint mixin.",source:"@site/docs/guides/how_to_use/worker_quality/using_screen_units.mdx",sourceDirName:"guides/how_to_use/worker_quality",slug:"/guides/how_to_use/worker_quality/using_screen_units",permalink:"/docs/guides/how_to_use/worker_quality/using_screen_units",draft:!1,editUrl:"https://github.com/facebookresearch/Mephisto/tree/main/docs/web/docs/guides/how_to_use/worker_quality/using_screen_units.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guides",previous:{title:"Teach potential workers with Onboarding",permalink:"/docs/guides/how_to_use/worker_quality/using_onboarding"},next:{title:"Check against standards with Gold Labels",permalink:"/docs/guides/how_to_use/worker_quality/using_golds"}},h={},p=[{value:"Showcase",id:"showcase",level:2},{value:"Things to note in the showcase:",id:"things-to-note-in-the-showcase",level:3},{value:"Basic configuration",id:"basic-configuration",level:2},{value:"Setting up SharedTaskState",id:"setting-up-sharedtaskstate",level:2},{value:"See the full code here",id:"see-the-full-code-here",level:3},{value:"See hydra configuration here",id:"see-hydra-configuration-here",level:3},{value:"Additional Questions?",id:"additional-questions",level:2}],g={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"check-worker-quality-with-screening-units"},"Check worker quality with Screening Units"),(0,r.kt)("p",null,"Screening units help filter out low-quality work, generally by hiding parts of the validation you're paying attention to behind the Mephisto server. To support this we provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenTaskRequired")," blueprint mixin."),(0,r.kt)("p",null,"Screening units are a heuristic-based way to determine, on the first task completion, if a worker has understood the instructions of a task. They can be run either on real data you want annotated (for cases where your heuristics can be run whenever) or on specific 'test' data you believe it's easier to validate on."),(0,r.kt)("h2",{id:"showcase"},"Showcase"),(0,r.kt)(o.Z,{playing:!0,controls:!0,width:"100%",height:"auto",url:"https://user-images.githubusercontent.com/55665282/183139879-d252d899-454c-4c15-afaa-474e6f02812b.mp4",mdxType:"ReactPlayer"}),(0,r.kt)("h3",{id:"things-to-note-in-the-showcase"},"Things to note in the showcase:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"remote_procedure/mnist")," example is ran with the ",(0,r.kt)("inlineCode",{parentName:"li"},"screening_example")," configuration enabled to ensure that screening units are generated."),(0,r.kt)("li",{parentName:"ul"},"When a worker goes to an assignment for the first time they see a screening unit."),(0,r.kt)("li",{parentName:"ul"},'Drawing a "3" gives the worker the passing qualification'),(0,r.kt)("li",{parentName:"ul"},'Drawing any number other than "3" gives the worker the blocked qualification'),(0,r.kt)("li",{parentName:"ul"},"Going to a different assignment when you have a blocked qualification shows you a not qualified screen."),(0,r.kt)("li",{parentName:"ul"},"Going to a different assignment when you have a passing qualification allows you to see the real unit")),(0,r.kt)("h2",{id:"basic-configuration"},"Basic configuration"),(0,r.kt)("p",null,"There are a few required configuration parts for using screening units:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hydra args",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blueprint.passed_qualification_name"),": A string qualification to mark people who have passed screening."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blueprint.block_qualification"),": A string qualification to mark people who have failed screening."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blueprint.use_screening_task"),": Determines if the screening units feature will be enabled. Set to ",(0,r.kt)("strong",{parentName:"li"},"true to enable screening units")," and set to ",(0,r.kt)("strong",{parentName:"li"},"false to disable screening units"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blueprint.max_screening_units"),": An int for the maximum number of screening tasks you're willing to launch with this batch. Used to limit how much you will pay out for units that aren't annotating your desired data.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Must be set to 0 if ",(0,r.kt)("inlineCode",{parentName:"li"},"screening_data_factory")," is set to False"),(0,r.kt)("li",{parentName:"ul"},"Must be greater than 0 if ",(0,r.kt)("inlineCode",{parentName:"li"},"screening_data_factory")," is not False"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"task.allowed_concurrent:")," An int for the number of allowed concurrent units at a time per worker. This value ",(0,r.kt)("strong",{parentName:"li"},"must be set to 1"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Screening units can only run this task type with one allowed concurrent unit at a time per worker, to ensure screening before moving into real units."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ScreenTaskSharedState"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"screening_data_factory"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"False")," if you want to validate on real data. Otherwise, a factory that generates input data for a screening unit for a worker. Explained in-depth below.")))),(0,r.kt)("h2",{id:"setting-up-sharedtaskstate"},"Setting up SharedTaskState"),(0,r.kt)("p",null,"With the basic configuration done, you'll also need to provide additional arguments to your ",(0,r.kt)("inlineCode",{parentName:"p"},"SharedTaskState")," to register the required qualifications and the screening validation function."),(0,r.kt)("p",null,"A shortened version of the run script for the video above looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# run_task.py\n\ndef my_screening_unit_generator():\n    """\n    The frontend react webapp reads in\n    isScreeningUnit using the initialTaskData\n    prop\n    """\n    while True:\n        yield {"isScreeningUnit": True}\n\ndef validate_screening_unit(unit: Unit):\n    """Checking if the drawn number is 3"""\n    agent = unit.get_assigned_agent()\n    if agent is not None:\n        data = agent.state.get_data()\n        annotation = data["final_submission"]["annotations"][0]\n        if annotation["isCorrect"] and annotation["currentAnnotation"] == 3:\n            return True\n    return False\n\n@task_script(default_config_file="example.yaml")\ndef main(operator: Operator, cfg: DictConfig) -> None:\n  is_using_screening_units = cfg.mephisto.blueprint["use_screening_task"]\n  tasks: List[Dict[str, Any]] = [{"isScreeningUnit": False}] * cfg.num_tasks\n  ...\n  shared_state = SharedRemoteProcedureTaskState(\n        static_task_data=tasks,\n        function_registry=function_registry,\n    )\n\n  if is_using_screening_units:\n      """You have to defined a few more properties to enable screening units"""\n      shared_state.on_unit_submitted = ScreenTaskRequired.create_validation_function(\n          cfg.mephisto,\n          validate_screening_unit,\n      )\n      shared_state.screening_data_factory = my_screening_unit_generator()\n      shared_state.qualifications += ScreenTaskRequired.get_mixin_qualifications(\n          cfg.mephisto, shared_state\n      )\n  ...\n')),(0,r.kt)("h3",{id:"see-the-full-code-here"},"See the full code ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/facebookresearch/Mephisto/blob/main/examples/remote_procedure/mnist/run_task.py"},"here")),(0,r.kt)("h3",{id:"see-hydra-configuration-here"},"See hydra configuration ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/facebookresearch/Mephisto/blob/main/examples/remote_procedure/mnist/hydra_configs/conf/screening_example.yaml"},"here")),(0,r.kt)("h2",{id:"additional-questions"},"Additional Questions?"),(0,r.kt)("p",null,"You can find more information on using screening units in the reference documentation for ",(0,r.kt)(s.Z,{target:null,to:"pathname:///python_api/mephisto/abstractions/blueprints/mixins/screen_task_required.html",mdxType:"Link"},(0,r.kt)("inlineCode",{parentName:"p"},"ScreenTaskRequired")),"."))}k.isMDXComponent=!0}}]);