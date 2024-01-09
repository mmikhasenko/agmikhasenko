### A Pluto.jl notebook ###
# v0.19.36

using Markdown
using InteractiveUtils

# ╔═╡ 670c7b8d-4a24-49f4-9961-c7fee19858fb
function is_notebook(p)
    startswith(read(p, String), "### A Pluto")
end;

# ╔═╡ 9176c40c-62ed-47e6-87db-1b278e3ca553
hook_link(p) = replace(p, ".jl" => ".html");

# ╔═╡ 97d6750e-c4d8-4b4a-9057-3e22236636e3
readme = read(joinpath(@__DIR__, "README.md"), String) |> Markdown.parse;

# ╔═╡ bfc40cc7-e0b6-4fc8-8574-e337c17d3e47
hook_name(file) = "@" * replace(basename(file), ".jl" => "");

# ╔═╡ 8305ac60-b88e-46f4-bdd6-cff4749bfc40
sources = let
    files = map(
        f -> " - [`$(hook_name(f))`](src/$(hook_link(f)))",
        filter(
            path -> basename(path) != "PlutoLinks.jl" && endswith(path, ".jl"),
            readdir("src")
        )
    ) |> s -> join(s, "\n") |> Markdown.parse

    md"""
    #### Fun questions

    $(files)
    """
end;

# ╔═╡ a34962c9-8ca1-43c9-aed8-077964ada4ad
md"""
$(readme)
$(sources)
"""

# ╔═╡ Cell order:
# ╟─670c7b8d-4a24-49f4-9961-c7fee19858fb
# ╟─9176c40c-62ed-47e6-87db-1b278e3ca553
# ╟─97d6750e-c4d8-4b4a-9057-3e22236636e3
# ╟─bfc40cc7-e0b6-4fc8-8574-e337c17d3e47
# ╟─8305ac60-b88e-46f4-bdd6-cff4749bfc40
# ╟─a34962c9-8ca1-43c9-aed8-077964ada4ad
