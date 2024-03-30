(function() {var type_impls = {
"alloy":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ErrorPayload%3CErrData%3E\" class=\"impl\"><a href=\"#impl-Clone-for-ErrorPayload%3CErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ErrData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>&lt;ErrData&gt;<div class=\"where\">where\n    ErrData: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>&lt;ErrData&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","alloy::rpc::json_rpc::BorrowedErrorPayload"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ErrorPayload%3CErrData%3E\" class=\"impl\"><a href=\"#impl-Debug-for-ErrorPayload%3CErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ErrData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>&lt;ErrData&gt;<div class=\"where\">where\n    ErrData: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","alloy::rpc::json_rpc::BorrowedErrorPayload"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-ErrorPayload%3CErrData%3E\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-ErrorPayload%3CErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, ErrData&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>&lt;ErrData&gt;<div class=\"where\">where\n    ErrData: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(\n    deserializer: D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>&lt;ErrData&gt;, &lt;D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","alloy::rpc::json_rpc::BorrowedErrorPayload"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-ErrorPayload%3CErrData%3E\" class=\"impl\"><a href=\"#impl-Display-for-ErrorPayload%3CErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ErrData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>&lt;ErrData&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","alloy::rpc::json_rpc::BorrowedErrorPayload"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ErrorPayload%3C%26RawValue%3E\" class=\"impl\"><a href=\"#impl-ErrorPayload%3C%26RawValue%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>&lt;&amp;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.115/serde_json/raw/struct.RawValue.html\" title=\"struct serde_json::raw::RawValue\">RawValue</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_owned\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html#tymethod.into_owned\" class=\"fn\">into_owned</a>(self) -&gt; <a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a></h4></section></summary><div class=\"docblock\"><p>Convert this borrowed error payload into an owned payload by copying\nthe data from the deserializer (if necessary).</p>\n</div></details></div></details>",0,"alloy::rpc::json_rpc::BorrowedErrorPayload"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ErrorPayload%3CData%3E\" class=\"impl\"><a href=\"#impl-ErrorPayload%3CData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Data&gt; <a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>&lt;Data&gt;<div class=\"where\">where\n    Data: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.115/serde_json/raw/struct.RawValue.html\" title=\"struct serde_json::raw::RawValue\">RawValue</a>&gt; + 'a,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_data_as\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html#tymethod.try_data_as\" class=\"fn\">try_data_as</a>&lt;T&gt;(&amp;'a self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.115/serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>&gt;&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Deserialize the error’s <code>data</code> field, borrowing from the data field if\nnecessary.</p>\n<h5 id=\"returns\"><a class=\"doc-anchor\" href=\"#returns\">§</a>Returns</h5>\n<ul>\n<li><code>None</code> if the error has no <code>data</code> field.</li>\n<li><code>Some(Ok(data))</code> if the error has a <code>data</code> field that can be deserialized.</li>\n<li><code>Some(Err(err))</code> if the error has a <code>data</code> field that can’t be deserialized.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deser_data\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html#tymethod.deser_data\" class=\"fn\">deser_data</a>&lt;T&gt;(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>&lt;T&gt;, <a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>&lt;Data&gt;&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,</div></h4></section></summary><div class=\"docblock\"><p>Attempt to deserialize the data field.</p>\n<h5 id=\"returns-1\"><a class=\"doc-anchor\" href=\"#returns-1\">§</a>Returns</h5>\n<ul>\n<li><code>Ok(ErrorPayload&lt;T&gt;)</code> if the data field can be deserialized</li>\n<li><code>Err(self)</code> if the data field can’t be deserialized, or if there is no data field.</li>\n</ul>\n</div></details></div></details>",0,"alloy::rpc::json_rpc::BorrowedErrorPayload"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-ErrorPayload%3CErrData%3E\" class=\"impl\"><a href=\"#impl-Serialize-for-ErrorPayload%3CErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;ErrData&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>&lt;ErrData&gt;<div class=\"where\">where\n    ErrData: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","alloy::rpc::json_rpc::BorrowedErrorPayload"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()