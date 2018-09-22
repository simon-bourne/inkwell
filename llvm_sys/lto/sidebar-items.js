initSidebarItems({"enum":[["LLVMOpaqueLTOCodeGenerator",""],["LLVMOpaqueLTOModule",""],["LLVMOpaqueThinLTOCodeGenerator",""],["lto_codegen_diagnostic_severity_t",""],["lto_codegen_model",""],["lto_debug_model",""],["lto_symbol_attributes",""]],"fn":[["lto_api_version","Returns the runtime API version."],["lto_codegen_add_module",""],["lto_codegen_add_must_preserve_symbol",""],["lto_codegen_compile",""],["lto_codegen_compile_optimized","Generates code for the optimized merged module into one native object file."],["lto_codegen_compile_to_file",""],["lto_codegen_create",""],["lto_codegen_create_in_local_context",""],["lto_codegen_debug_options",""],["lto_codegen_dispose",""],["lto_codegen_optimize","Runs optimization for the merged module."],["lto_codegen_set_assembler_args",""],["lto_codegen_set_assembler_path",""],["lto_codegen_set_cpu",""],["lto_codegen_set_debug_model",""],["lto_codegen_set_diagnostic_handler",""],["lto_codegen_set_module","Sets the object module for code gneeration. This will transfer ownership of the module to the code generator."],["lto_codegen_set_pic_model",""],["lto_codegen_set_should_embed_uselists","Set whether to embed uselists in bitcode."],["lto_codegen_set_should_internalize","Sets if we should run the itnernalize pass during optimization and code generation."],["lto_codegen_write_merged_modules",""],["lto_get_error_message",""],["lto_get_version",""],["lto_initialize_disassembler",""],["lto_module_create",""],["lto_module_create_from_fd",""],["lto_module_create_from_fd_at_offset",""],["lto_module_create_from_memory",""],["lto_module_create_from_memory_with_path",""],["lto_module_create_in_codegen_context",""],["lto_module_create_in_local_context",""],["lto_module_dispose",""],["lto_module_get_linkeropts","Returns the module's linker options."],["lto_module_get_num_symbols",""],["lto_module_get_symbol_attribute",""],["lto_module_get_symbol_name",""],["lto_module_get_target_triple",""],["lto_module_has_objc_category","Return true if `Buffer` contains a bitcode file with ObjC code (category or class) in it."],["lto_module_is_object_file",""],["lto_module_is_object_file_for_target",""],["lto_module_is_object_file_in_memory","Checks if a buffer is a loadable object file."],["lto_module_is_object_file_in_memory_for_target",""],["lto_module_is_thinlto","Test if a module has ThinLTO linking support."],["lto_module_set_target_triple",""],["thinlto_codegen_add_cross_referenced_symbol","Add a symbol to the list of global symbols that are cross-referenced between ThinLTO files."],["thinlto_codegen_add_module","Add a module to a code generator."],["thinlto_codegen_add_must_preserve_symbol","Add a symbol to the list of global symbols that must exist in the final generated code."],["thinlto_codegen_disable_codegen","Disable code generation (running all stages until codegen)."],["thinlto_codegen_dispose","Frees a code generator."],["thinlto_codegen_process","Optimize and codegen all modules attached to the code generator."],["thinlto_codegen_set_cache_dir",""],["thinlto_codegen_set_cache_entry_expiration","Set the expiration (in seconds) for cache entries."],["thinlto_codegen_set_cache_pruning_interval","Set the cache pruning interval, in seconds."],["thinlto_codegen_set_codegen_only","Perform codegen only; disable all other stages."],["thinlto_codegen_set_cpu","Set the CPU to generate code for."],["thinlto_codegen_set_final_cache_size_relative_to_available_space","Set the maximum cache size to persist across builds."],["thinlto_codegen_set_pic_model","Set which PIC code model to generate."],["thinlto_codegen_set_savetemps_dir","Set the path to a directory to use as temporary bitcode storage."],["thinlto_create_codegen","Instantiates a ThinLTO code generator."],["thinlto_debug_options","Parse -mllvm style debug options."],["thinlto_module_get_num_object_files","Return the number of object files produced by the code generator."],["thinlto_module_get_num_objects","Return the number of object files produced by the code generator."],["thinlto_module_get_object","Return a reference to the `index`th object file produced by the code generator."],["thinlto_module_get_object_file","Return the path to the ith output object file."],["thinlto_set_generated_objects_dir","Set the path to a directory to save generated object files."]],"struct":[["LTOObjectBuffer","Type to wrap a single object returned by ThinLTO."]],"type":[["lto_bool_t",""],["lto_code_gen_t",""],["lto_diagnostic_handler_t",""],["lto_module_t",""],["thinlto_code_gen_t",""]]});